package components

import (
	"github.com/jinzhu/gorm"
	"go-app/db_conf"
)

type Title struct {
	gorm.Model
	Text        string
	ComponentID uint
}
type Comment struct {
	gorm.Model
	Text        string
	ComponentID uint
}
type Image struct {
	gorm.Model
	Text        string
	ComponentID uint
}
type Component struct {
	gorm.Model
	ServiceID uint
	Titles    []Title   `gorm:"foreignKey:ComponentID"`
	Comments  []Comment `gorm:"foreignKey:ComponentID"`
	Images    []Image   `gorm:"foreignKey:ComponentID"`
	Type      string
	TypeID    string
	Grid      int
	NextID    int
}

type ListComponent []Component
type ListTitle []Title
type ListComment []Comment
type ListImage []Image

func DBInit() {
	db := db_conf.DBConnect()
	// コネクション解放
	defer db.Close()
	db.AutoMigrate(Title{})
	db.AutoMigrate(Comment{})
	db.AutoMigrate(Image{})
	db.AutoMigrate(Component{})
}
