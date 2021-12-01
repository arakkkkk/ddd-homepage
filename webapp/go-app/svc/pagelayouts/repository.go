package services

import (
	"go-app/db_conf"
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
