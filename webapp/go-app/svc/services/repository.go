package services

import (
	"go-app/db_conf"
	"go-app/svc/components"
	"log"
)

func create(service Service) Service {
	db := db_conf.DBConnect()
	defer db.Close()
	if err := db.Create(&service).Error; err != nil {
		log.Println(err)
	}
	return service
}

func update(service Service) Service {
	db := db_conf.DBConnect()
	defer db.Close()
	log.Print(service.ID)
	if err := db.Save(&service).Error; err != nil {
		log.Println(err)
	}
	return service
}

func get(id int) Service {
	db := db_conf.DBConnect()
	var service Service
	db.First(&service, "id= ?", id)

	var list_component components.ListComponent
	db.Model(&service).Association("Components").Find(&list_component)
	for _, component := range list_component {
		log.Println(component)
		var titles components.ListTitle
		db.Model(&component).Association("Title").Find(&titles)
		component.Titles = titles
		var comments components.ListComment
		db.Model(&component).Association("Comment").Find(&comments)
		component.Comments = comments
		var images components.ListImage
		db.Model(&component).Association("Image").Find(&images)
		component.Images = images
	}
	service.Components = list_component

	db.Close()
	return service
}

func list() ListService {
	db := db_conf.DBConnect()
	var list_service ListService
	db.Find(&list_service).Order("turn DESC")
	db.Close()
	return list_service
}

func list_grouped() ListService {
	db := db_conf.DBConnect()
	var list_service ListService
	db.Where("Grouped = ?", true).Find(&list_service).Order("turn DESC")
	db.Close()
	return list_service
}

func list_ungrouped() ListService {
	db := db_conf.DBConnect()
	var list_service ListService
	db.Where("Grouped = ?", false).Find(&list_service).Order("turn DESC")
	db.Close()
	return list_service
}
