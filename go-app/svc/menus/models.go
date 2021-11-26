package menus

import (
	"github.com/jinzhu/gorm"
	"go-app/db_conf"
)

type Menu struct {
	gorm.Model
	Service_id int
	Title      string
	Comment    string
	Price      int
	Img        string
	Star       bool
	Turn       int
	Show       bool
}
type ListMenu []Menu

func DBInit() {
	db := db_conf.DBConnect()
	// コネクション解放
	defer db.Close()
	db.AutoMigrate(Menu{})
}
