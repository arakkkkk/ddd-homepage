package db_conf

import (
    "os"
    "fmt"
    "github.com/jinzhu/gorm"
)

func DBConnect() *gorm.DB {
    user := os.Getenv("MYSQL_USER")
    pass := os.Getenv("MYSQL_PASSWORD")
    dbname := os.Getenv("MYSQL_DATABASE")
    host := os.Getenv("MYSQL_HOST")
    dbconf := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=True&loc=Local", user, pass, host, dbname)
    db, err := gorm.Open("mysql", dbconf)
    if err != nil {
        panic(err.Error())
    } else {
        // println("go container > db connected!!")
    }
    return db
}
