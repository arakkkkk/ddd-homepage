package components

import (
	"github.com/jinzhu/gorm"
	"go-app/db_conf"
)

type Component struct {
	gorm.Model
    Titles: []Title
    Comments: []Comments
    Imeges: []Comments
    Type:   string
    TypeID: string
    Grid:   int
    next:   Component
}
type Title struct {
	gorm.Model
    Text: string
    ComponentID: unit
}
type Comment struct {
	gorm.Model
    Text: string
    ComponentID: unit
}
type Image struct {
	gorm.Model
    Text: string
    ComponentID: unit
}

type ListComponent []Component

func DBInit() {
	db := db_conf.DBConnect()
	// コネクション解放
	defer db.Close()
	db.AutoMigrate(Title{})
	db.AutoMigrate(Comment{})
	db.AutoMigrate(Image{})
	db.AutoMigrate(Component{})
}
