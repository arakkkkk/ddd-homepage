package owners

import (
    "go-app/db_conf"
)


// ユーザー登録処理
func create(owner Owner) Owner {
    db := db_conf.DBConnect()
    defer db.Close()
    // Insert処理
    db.Create(&owner).GetErrors()
    return owner
}

func get(name string) Owner {
    db := db_conf.DBConnect()
    var owner Owner
    db.First(&owner, "Name = ?", name)
    db.Close()
    return owner
}

func list() ListOwner {
    db := db_conf.DBConnect()
    var list_owner ListOwner
    db.Find(&list_owner)
    db.Close()
    return list_owner
}
