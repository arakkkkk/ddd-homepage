package services

import (
	"github.com/jinzhu/gorm"
	"go-app/db_conf"
)

type Service struct {
	gorm.Model
	Title   string
	Comment string
	Show    bool
	Grouped bool
	Img     string
	Turn    int
}
type ListService []Service

func DBInit() {
	db := db_conf.DBConnect()
	// コネクション解放
	defer db.Close()
	db.AutoMigrate(Service{})
}
