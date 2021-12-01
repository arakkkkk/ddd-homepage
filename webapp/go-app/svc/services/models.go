package services

import (
	"github.com/jinzhu/gorm"
	"go-app/db_conf"
	"go-app/svc/components"
)

type Service struct {
	gorm.Model
	Title      string
	Comment    string
	Show       bool
	Grouped    bool
	Img        string
	Turn       int
	Components []components.Component `gorm:"foreignKey:ServiceID"`
}
type ListService []Service

func DBInit() {
	db := db_conf.DBConnect()
	// コネクション解放
	defer db.Close()
	db.AutoMigrate(Service{})
}
