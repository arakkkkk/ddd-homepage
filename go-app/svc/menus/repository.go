package menus

import (
	"go-app/db_conf"
	"log"
)

func create(menu Menu) Menu {
	db := db_conf.DBConnect()
	defer db.Close()
	if err := db.Create(&menu).Error; err != nil {
		log.Println(err)
	}
	return menu
}

func update(menu Menu) Menu {
	db := db_conf.DBConnect()
	defer db.Close()
	if err := db.Save(&menu).Error; err != nil {
		log.Println(err)
	}
	return menu
}

func get(id int) Menu {
	db := db_conf.DBConnect()
	var menu Menu
	db.First(&menu, "id= ?", id)
	db.Close()
	return menu
}

func list() ListMenu {
	db := db_conf.DBConnect()
	var list_menu ListMenu
	db.Find(&list_menu).Order("turn DESC")
	db.Close()
	return list_menu
}

func list_id(service_id int) ListMenu {
	db := db_conf.DBConnect()
	var list_menu ListMenu
	db.Find(&list_menu)
	db.Where("Service_id = ?", service_id).Find(&list_menu).Order("turn DESC")
	db.Close()
	return list_menu
}
