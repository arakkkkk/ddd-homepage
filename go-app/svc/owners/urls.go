package owners

import (
    "net/http"
    "log"
    "math/rand"

    "go-app/crypto"
    // "go-app/owners.menu"

    "github.com/gin-contrib/sessions"
    "github.com/gin-gonic/gin"
    _ "github.com/go-sql-driver/mysql"
)

const (
    rs5Letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    rs5LetterIdxBits = 6
    rs5LetterIdxMask = 1<<rs5LetterIdxBits - 1
    rs5LetterIdxMax = 63 / rs5LetterIdxBits
)

func RandString5(n int) string {
    b := make([]byte, n)
    cache, remain := rand.Int63(), rs5LetterIdxMax
    for i := n-1; i >= 0; {
        if remain == 0 {
            cache, remain = rand.Int63(), rs5LetterIdxMax
        }
        idx := int(cache & rs5LetterIdxMask)
        if idx < len(rs5Letters) {
            b[i] = rs5Letters[idx]
            i--
        }
        cache >>= rs5LetterIdxBits
        remain--
    }
    return string(b)
}


func Urls(router *gin.Engine) *gin.Engine{
    router.POST("/signup", func(c *gin.Context) {
        var form Owner
        c.ShouldBindJSON(&form)
        // passwordの暗号化
        passwordEncrypt, _ := crypto.PasswordEncrypt(form.Password)
        form.Password = passwordEncrypt

        owner := create(form)
        c.JSON(302, owner)
    })

    router.POST("/login", func(c *gin.Context) {
        var form Owner
        println("login")
        c.ShouldBindJSON(&form)
        dbPassword := get(form.Name).Password
        // ユーザーパスワードの比較
        if err := crypto.CompareHashAndPassword(dbPassword, form.Password); err != nil {
            log.Println("Failed log in.")
            c.JSON(http.StatusBadRequest, err)
        } else {
            log.Println("You loged in.")
            session := sessions.Default(c)
            session.Set("UserName", form.Name)
            session.Save()
            c.JSON(200, get(form.Name))
        }
    })

    router.GET("/logincheck", func(c *gin.Context) {
        session := sessions.Default(c)
        user_name, _ := session.Get("UserName").(string)
        if session.Get("UserName") != nil {
            c.JSON(200, gin.H{"state":get(user_name)})
        } else {
            c.JSON(200, gin.H{"state":false})
        }
    })
    return router
}
