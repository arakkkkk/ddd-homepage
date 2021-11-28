package menus

import (
	"bytes"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"

	"image/jpeg"
	"image/png"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func Urls(router *gin.Engine) *gin.Engine {
	router.GET("/menus/get/:id", func(c *gin.Context) {
		id, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			c.JSON(http.StatusBadRequest, err)
		} else {
			c.JSON(200, get(id))
		}
	})

	router.GET("/menus/list/all", func(c *gin.Context) {
		c.JSON(200, list())
	})

	router.GET("/menus/list/:id", func(c *gin.Context) {
		id, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			c.JSON(http.StatusBadRequest, err)
		} else {
			c.JSON(200, list_id(id))
		}
	})

	router.POST("/menus/update", func(c *gin.Context) {
		menu_id, _ := strconv.Atoi(c.PostForm("menu_id"))
		menu := get(menu_id)
		file, err := c.FormFile("file")
		if err != nil {
			log.Println(err)
		} else {
			filename := time.Now().Format("2006-0102-150405") + "_" + file.Filename
			err = c.SaveUploadedFile(file, "images/"+filename)
			if err != nil {
				log.Println(err)
			} else {
				menu.Img = filename
			}
		}

		menu.Title = c.PostForm("title")
		menu.Comment = c.PostForm("comment")
		menu.Price, _ = strconv.Atoi(c.PostForm("price"))
		menu.Show, _ = strconv.ParseBool(c.PostForm("show"))
		menu.Star, _ = strconv.ParseBool(c.PostForm("star"))
		menu.Turn, _ = strconv.Atoi(c.PostForm("turn"))

		response := update(menu)
		c.JSON(202, response)
	})

	router.POST("/menus/create", func(c *gin.Context) {
		var form Menu
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

		form.Service_id, _ = strconv.Atoi(c.PostForm("service_id"))
		form.Title = c.PostForm("title")
		form.Comment = c.PostForm("comment")
		form.Price, _ = strconv.Atoi(c.PostForm("price"))
		form.Show, _ = strconv.ParseBool(c.PostForm("show"))
		form.Star, _ = strconv.ParseBool(c.PostForm("star"))
		form.Turn, _ = strconv.Atoi(c.PostForm("turn"))

		menu := create(form)
		c.JSON(202, menu)
	})

	router.GET("/image/:filename", func(c *gin.Context) {
		filename := c.Param("filename")
		file, err := os.Open("images/" + filename)
		if err != nil {
			log.Fatal(err)
		}

		ext := filepath.Ext(filename)

		if ext == ".jpeg" || ext == ".jpg" {
			img, _ := jpeg.Decode(file)
			file.Close()
			buffer := new(bytes.Buffer)
			if err := jpeg.Encode(buffer, img, nil); err != nil {
				log.Println("unable to encode image.")
			}
			imageBytes := buffer.Bytes()

			c.Data(http.StatusOK, "image/jpg", imageBytes)

		} else if ext == ".png" {
			img, _ := png.Decode(file)
			file.Close()
			buffer := new(bytes.Buffer)
			if err := jpeg.Encode(buffer, img, nil); err != nil {
				log.Println("unable to encode image.")
			}
			imageBytes := buffer.Bytes()

			c.Data(http.StatusOK, "image/jpg", imageBytes)
		} else {
			panic(ext)
		}

	})

	return router
}
