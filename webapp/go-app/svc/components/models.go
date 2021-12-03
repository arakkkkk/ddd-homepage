package components

import (
	"github.com/jinzhu/gorm"
	"go-app/db_conf"
)

type Title struct {
	gorm.Model
	Text        string
	Turn        int
	ComponentID uint
}
type Comment struct {
	gorm.Model
	Text        string
	Turn        int
	ComponentID uint
}
type Component struct {
	gorm.Model
	ServiceID uint
	Titles    []Title   `gorm:"foreignKey:ComponentID"`
	Comments  []Comment `gorm:"foreignKey:ComponentID"`
	Image     string
	Type      string
	TypeID    string
	Grid      int
	NextID    uint
}

type ListComponent []Component
type ListTitle []Title
type ListComment []Comment

func DBInit() {
	db := db_conf.DBConnect()
	// コネクション解放
	defer db.Close()
	db.AutoMigrate(Title{})
	db.AutoMigrate(Comment{})
	db.AutoMigrate(Component{})
}
