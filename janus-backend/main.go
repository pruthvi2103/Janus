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
	models.ConnectDB(fmt.Sprintf("mongodb+srv://%s:%s@%s.rvvj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",os.Getenv("MONGO_DB_USER"),os.Getenv("MONGO_DB_PASSWORD"),os.Getenv("MONGO_DB_DATABASE")))
}

func main() {
	router:= gin.Default()
	router.GET("/links", controllers.GetAllLinks)
	router.GET("/links/:id",controllers.GetLinkById)
	router.Run("localhost:8080")
	fmt.Println(utils.RandomNumberWithLimit(6,10))
}