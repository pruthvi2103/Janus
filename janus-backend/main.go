package main

import (
	"fmt"
	"os"
	"pruthvi2103/janus/controllers"
	"pruthvi2103/janus/models"
	"pruthvi2103/janus/utils"

	"github.com/gin-gonic/gin"
)
func init() {
	models.ConnectDB(os.Getenv("DB_URL"))
}

func main() {
	router:= gin.Default()
	router.GET("/links", controllers.GetAllLinks)
	router.GET("/links/:id",controllers.GetLinkById)
	router.Run("localhost:8080")
	fmt.Println(utils.RandomNumberWithLimit(6,10))
}