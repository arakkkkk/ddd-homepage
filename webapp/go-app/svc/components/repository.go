package components

import (
	"go-app/db_conf"
	"log"
)

func create(component Component) Component {
	db := db_conf.DBConnect()
	defer db.Close()
	if err := db.Create(&component).Error; err != nil {
		log.Println(err)
	}
	return component
}

func update(component Component) Component {
	db := db_conf.DBConnect()
	defer db.Close()
	log.Print(component.ID)
	if err := db.Save(&component).Error; err != nil {
		log.Println(err)
	}
	return component
}

func get(id int) Component {
	db := db_conf.DBConnect()
	var component Component
	db.First(&component, "id= ?", id)
	db.Close()
	return component
}

func list() ListComponent {
	db := db_conf.DBConnect()
	var list_component ListComponent
	db.Find(&list_component).Order("turn DESC")
	db.Close()
	return list_component
}

func list_grouped() ListComponent {
	db := db_conf.DBConnect()
	var list_component ListComponent
	db.Where("Grouped = ?", true).Find(&list_component).Order("turn DESC")
	db.Close()
	return list_component
}

func list_ungrouped() ListComponent {
	db := db_conf.DBConnect()
	var list_component ListComponent
	db.Where("Grouped = ?", false).Find(&list_component).Order("turn DESC")
	db.Close()
	return list_component
}
