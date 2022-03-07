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
func CORSMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204)
            return
        }

        c.Next()
    }
}


func main() {
	router:= gin.Default()
	router.Use(CORSMiddleware())
	router.GET("/links", controllers.GetAllLinks)
	router.POST("/links",controllers.CreateLink)
	router.GET("/links/:id",controllers.GetLinkById)

	router.Run("localhost:8080")
	fmt.Println(utils.RandomNumberWithLimit(6,10))
}