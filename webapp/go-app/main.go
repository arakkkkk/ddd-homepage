package main

import (
	"go-app/svc/components"
	"go-app/svc/menus"
	"go-app/svc/owners"
	"go-app/svc/services"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()
	router.LoadHTMLGlob("views/*.html")
	store := cookie.NewStore([]byte("secret"))
	router.Use(sessions.Sessions("mysession", store))

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, "hello world!!")
	})

	owners.DBInit()
	router = owners.Urls(router)

	components.DBInit()
	router = components.Urls(router)

	services.DBInit()
	router = services.Urls(router)

	router = menus.Urls(router)
	router.Run(":8000")
}
