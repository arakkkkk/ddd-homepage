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

func AppendComponent(service Service, component components.Component) Service {
	db := db_conf.DBConnect()
	defer db.Close()
	db.Model(&service).Association("Components").Append(component)
	return service
}

func update(service Service) Service {
	db := db_conf.DBConnect()
	defer db.Close()
	if err := db.Save(&service).Error; err != nil {
		log.Println(err)
	}
	return service
}

func get(id int) Service {
	db := db_conf.DBConnect()
	var service Service
	db.First(&service, "id= ?", id)

	// componentのリストをorderdComponentsとして定義
	var orderedComponents []components.Component
	// 対象のserviceに関連付けられたcomponentの末端要素を配列に追加
	orderedComponents = append(orderedComponents, components.GetTail(int(service.ID)))
	if orderedComponents[0].ID != 0 {
		for i := 0; i < 100; i++ {
			// 現在の先頭の要素から一つ前のcomponentを取得
			now_component := components.GetPrev(orderedComponents[len(orderedComponents)-1].ID)
			// 一つ前のcomponentが取得できなかったら終了
			if now_component.ID == 0 {
				break
			}
			// 取得した一つ前のcomponentを末端に追加
			// この時点では逆順でsliceに追加されていく
			orderedComponents = append(orderedComponents, now_component)
		}
		// ordeorderedComponentsを逆順に並び替える
		for i := 0; i < len(orderedComponents)/2; i++ {
			orderedComponents[i], orderedComponents[len(orderedComponents)-i-1] =
				orderedComponents[len(orderedComponents)-i-1], orderedComponents[i]
		}
        service.Components = orderedComponents
		for i, component := range service.Components {
			db.Model(&component).Association("Titles").Find(&service.Components[i].Titles)
			db.Model(&component).Association("Comments").Find(&service.Components[i].Comments)
		}
    }

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
