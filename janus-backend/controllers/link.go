package controllers

import (
	"fmt"
	"net/http"
	"pruthvi2103/janus/models"

	"github.com/gin-gonic/gin"
)

func GetAllLinks(c *gin.Context)   {
	c.IndentedJSON(http.StatusOK,models.GetAllLinks())
}

func GetLinkById(c *gin.Context)   {
		shortCode:= c.Param("id")
		c.IndentedJSON(http.StatusOK, models.FindLinkById(shortCode)) 
}
func CreateLink(c *gin.Context)  {
	var newLink models.Link
	if err := c.BindJSON(&newLink); err!=nil {
		return
	}
	fmt.Printf("%+v\n",newLink)
	fmt.Printf(newLink.Url)
	linkResult := models.CreateLink(newLink)
	c.IndentedJSON(http.StatusOK,linkResult)
}
