package owners

import (
    "go-app/db_conf"
    "github.com/jinzhu/gorm"
)


type Owner struct {
    gorm.Model
    Name string
    Password string
}
type ListOwner []Owner

func DBInit() {
    db := db_conf.DBConnect()
    // コネクション解放
    defer db.Close()
    db.AutoMigrate(Owner{})
}
