package main

import (
	"fmt"
	"os"
	"pruthvi2103/janus/models"
)
func init() {
	models.ConnectDB(os.Getenv("DATABASE_URI"))
}

func main() {
	fmt.Println(models.GetAllLinks())
}