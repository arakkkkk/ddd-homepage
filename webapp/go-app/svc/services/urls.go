package services

import (
	// "encoding/json"
	"log"
	"net/http"
	"strconv"
	"time"
	// "io/ioutil"
	// "fmt"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"

	"go-app/svc/components"
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

	router.POST("/services/delete/:id", func(c *gin.Context) {
		id, _ := strconv.Atoi(c.Param("id"))
		service := get(id)
		Delete(service)
		c.JSON(200, service)
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

		service.Title = c.PostForm("title")
		service.Comment = c.PostForm("comment")
		service.Show, _ = strconv.ParseBool(c.PostForm("show"))
		service.Grouped, _ = strconv.ParseBool(c.PostForm("grouped"))
		service.Turn, _ = strconv.Atoi(c.PostForm("turn"))

		response := update(service)
		c.JSON(202, response)
	})

	router.POST("/services/:service_id/append/component/:comp_id/upimage", func(c *gin.Context) {
		comp_id, _ := strconv.Atoi(c.Param("comp_id"))
		service_id, _ := strconv.Atoi(c.Param("service_id"))
		service := get(service_id)
		var component components.Component
		if comp_id == 0 {
			component = service.Components[0]
		} else {
			component = components.Get(int(components.Get(comp_id).NextID))
		}

		if component.ServiceID == 0 {
			c.JSON(302, gin.H{})
		} else {

			file, err := c.FormFile("file")
			if err != nil {
				log.Println(err)
			} else {
				filename := time.Now().Format("2006-0102-150405") + "_" + file.Filename
				err = c.SaveUploadedFile(file, "images/"+filename)
				if err != nil {
					log.Println(err)
				} else {
					component.Image = filename
				}
			}

			components.Update(component)
			log.Println("jiojoijoijio")
			log.Println(component)
			c.JSON(202, component)
		}
	})

	router.POST("/services/:service_id/append/component/:comp_id", func(c *gin.Context) {
		// comp_idをもつcomponentの右側に追加する
		// comp_id == 0の場合先頭に追加する
		comp_id, _ := strconv.Atoi(c.Param("comp_id"))

		service_id, _ := strconv.Atoi(c.Param("service_id"))
		service := get(service_id)

		var adding_comp components.Component
		c.ShouldBindJSON(&adding_comp)
		adding_comp.ServiceID = service.ID

		if len(service.Components) == 0 {
			// 初めて追加する場合
			adding_comp.NextID = 0
			components.Create(adding_comp)
		} else {
			if comp_id == 0 {
				// 先頭に追加する場合
				head_comp := service.Components[0]
				adding_comp.NextID = head_comp.ID
				components.Update(head_comp)
				components.Create(adding_comp)
			} else {
				// 途中に追加or末端に追加する場合
				target_comp := components.Get(comp_id)
				adding_comp.NextID = target_comp.NextID
				adding_comp = components.Create(adding_comp)
				target_comp.NextID = adding_comp.ID
				components.Update(target_comp)
			}
		}

		c.JSON(202, get(service_id))
	})

	router.POST("/services/:service_id/delete/component/:comp_id", func(c *gin.Context) {
		comp_id, _ := strconv.Atoi(c.Param("comp_id"))
		service_id, _ := strconv.Atoi(c.Param("service_id"))

		delete_comp := components.Get(comp_id)
		prev_comp := components.GetPrev(delete_comp.ID)
		log.Println("jiojio", prev_comp)
		if prev_comp.ID != 0 {
			prev_comp.NextID = delete_comp.NextID
			components.Update(prev_comp)
		}
		components.Delete(delete_comp)

		c.JSON(202, get(service_id))
	})
	return router
}
