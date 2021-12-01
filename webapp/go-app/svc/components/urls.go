package components

import (
	"net/http"
	"strconv"
	// "reflect"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	// "fmt"
	"log"
	// "time"
)

func Urls(router *gin.Engine) *gin.Engine {
	router.GET("/components/get/:id", func(c *gin.Context) {
		id, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			c.JSON(http.StatusBadRequest, err)
		} else {
			c.JSON(200, get(id))
		}
	})

	// router.GET("/components/list/all", func(c *gin.Context) {
	// 	c.JSON(200, list())
	// })

	// router.GET("/components/list/grouped", func(c *gin.Context) {
	// 	c.JSON(200, list_grouped())
	// })

	// router.GET("/components/list/ungrouped", func(c *gin.Context) {
	// 	c.JSON(200, list_ungrouped())
	// })

	router.POST("/components/create", func(c *gin.Context) {
		log.Println("create_comp")
		var form Component
		c.ShouldBindJSON(&form)
		// file, err := c.FormFile("file")
		// if err != nil {
		// 	log.Println(err)
		// } else {
		// 	filename := time.Now().Format("2006-0102-150405") + "_" + file.Filename
		// 	err = c.SaveUploadedFile(file, "images/"+filename)
		// 	if err != nil {
		// 		log.Println(err)
		// 	} else {
		// 		form.Img = filename
		// 	}
		// }

		// form.Titles =
		// form.Comment = c.PostForm("comment")
		// form.Show, _ = strconv.ParseBool(c.PostForm("show"))
		// form.Grouped, _ = strconv.ParseBool(c.PostForm("grouped"))
		// form.Turn, _ = strconv.Atoi(c.PostForm("turn"))

		component := create(form)
		c.JSON(202, component)
	})

	// router.POST("/components/update", func(c *gin.Context) {
	// 	component_id, _ := strconv.Atoi(c.PostForm("component_id"))
	// 	component := get(component_id)
	// 	file, err := c.FormFile("file")
	// 	if err != nil {
	// 		log.Println(err)
	// 	} else {
	// 		filename := time.Now().Format("2006-0102-150405") + "_" + file.Filename
	// 		err = c.SaveUploadedFile(file, "images/"+filename)
	// 		if err != nil {
	// 			log.Println(err)
	// 		} else {
	// 			component.Img = filename
	// 		}
	// 	}
	// 	log.Println(component_id)
	// 	log.Println(component.ID)

	// 	component.Title = c.PostForm("title")
	// 	component.Comment = c.PostForm("comment")
	// 	component.Show, _ = strconv.ParseBool(c.PostForm("show"))
	// 	component.Grouped, _ = strconv.ParseBool(c.PostForm("grouped"))
	// 	component.Turn, _ = strconv.Atoi(c.PostForm("turn"))

	// 	response := update(component)
	// 	c.JSON(202, response)
	// })
	return router
}
