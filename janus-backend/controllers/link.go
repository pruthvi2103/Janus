package controllers

import (
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

