package services

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"

	// "fmt"
	"go-app/svc/components"
	"log"
	"time"
)

func Urls(router *gin.Engine) *gin.Engine {
	router.GET("/services/get/:id", func(c *gin.Context) {
		id, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			c.JSON(http.StatusBadRequest, err)
		} else {
			c.JSON(200, get(id))
		}
	})

	router.GET("/services/list/all", func(c *gin.Context) {
		c.JSON(200, list())
	})

	router.GET("/services/list/grouped", func(c *gin.Context) {
		c.JSON(200, list_grouped())
	})

	router.GET("/services/list/ungrouped", func(c *gin.Context) {
		c.JSON(200, list_ungrouped())
	})

	router.POST("/services/create", func(c *gin.Context) {
		var form Service
		file, err := c.FormFile("file")
		if err != nil {
			log.Println(err)
		} else {
			filename := time.Now().Format("2006-0102-150405") + "_" + file.Filename
			err = c.SaveUploadedFile(file, "images/"+filename)
			if err != nil {
				log.Println(err)
			} else {
				form.Img = filename
			}
		}

		form.Title = c.PostForm("title")
		form.Comment = c.PostForm("comment")
		form.Show, _ = strconv.ParseBool(c.PostForm("show"))
		form.Grouped, _ = strconv.ParseBool(c.PostForm("grouped"))
		form.Turn, _ = strconv.Atoi(c.PostForm("turn"))

		service := create(form)
		c.JSON(202, service)
	})

	router.POST("/services/update", func(c *gin.Context) {
		service_id, _ := strconv.Atoi(c.PostForm("service_id"))
		service := get(service_id)
		file, err := c.FormFile("file")
		if err != nil {
			log.Println(err)
		} else {
			filename := time.Now().Format("2006-0102-150405") + "_" + file.Filename
			err = c.SaveUploadedFile(file, "images/"+filename)
			if err != nil {
				log.Println(err)
			} else {
				service.Img = filename
			}
		}
		log.Println(service_id)
		log.Println(service.ID)

		service.Title = c.PostForm("title")
		service.Comment = c.PostForm("comment")
		service.Show, _ = strconv.ParseBool(c.PostForm("show"))
		service.Grouped, _ = strconv.ParseBool(c.PostForm("grouped"))
		service.Turn, _ = strconv.Atoi(c.PostForm("turn"))

		response := update(service)
		c.JSON(202, response)
	})

	router.POST("/services/:serviec_id/append/component/:comp_id", func(c *gin.Context) {
		var form components.Component
		c.ShouldBindJSON(&form)
		comp_id, _ := strconv.Atoi(c.Param("comp_id"))
		form.NextID = comp_id + 1
		// リストをずらす処理

		service_id, _ := strconv.Atoi(c.Param("service_id"))
		service := get(service_id)
		service.Components = append(service.Components, form)

		response := update(service)
		c.JSON(202, response)
	})
	return router
}
