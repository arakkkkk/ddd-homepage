package components

import (
	"go-app/db_conf"
	"log"
)

func Get(id int) Component {
	db := db_conf.DBConnect()
	var component Component
	db.First(&component, "id=?", id)
	db.Close()
	return component
}
func GetPrev(next_id uint) Component {
	db := db_conf.DBConnect()
	var component Component
	db.First(&component, "next_id=?", next_id)
	db.Close()
	return component
}

func GetTail(service_id int) Component {
	db := db_conf.DBConnect()
	var component Component
    log.Println("get;", service_id)
	db.First(&component, "service_id=? AND next_id=?", service_id, 0)
    log.Println("get;", component)
	db.Close()
	return component
}

func Create(component Component) Component {
	db := db_conf.DBConnect()
	defer db.Close()
	if err := db.Create(&component).Error; err != nil {
		log.Println(err)
	}
	return component
}

func Update(component Component) Component {
	db := db_conf.DBConnect()
	defer db.Close()
	log.Print(component.ID)
	if err := db.Save(&component).Error; err != nil {
		log.Println(err)
	}
	return component
}

func Delete(component Component) Component {
	db := db_conf.DBConnect()
	defer db.Close()
    db.Delete(&component)
	return component
}

func List() ListComponent {
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

// func ChangeComponentHead(component Component,head bool) Component {
// 	db := db_conf.DBConnect()
// 	defer db.Close()
//     db.Model(&component).Updates(map[string]interface{}{"Head": head})
// 	return component
// }
