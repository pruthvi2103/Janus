package models

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)


var client *mongo.Client
var collection *mongo.Collection

type Link struct{
	url string
	shortcode string
	clicks int64
}

func ConnectDB(dbUri string)  {
	var err error
	ClientOptions:=options.Client().ApplyURI(dbUri)
	client,err= mongo.Connect(context.TODO(),ClientOptions)
	if err != nil {
       log.Fatal(err)
    }
	err = client.Ping(context.TODO(),nil)
	if err != nil {
        log.Fatal(err)
    }
	fmt.Println("Connected to MongoDB!")
	collection= client.Database("tedx2021").Collection("links")
	fmt.Println("Collection set!")
}

func GetAllLinks() []Link{
	
	cur,curErr := collection.Find(context.TODO(),bson.D{})
	if curErr !=nil{panic(curErr)}
	defer cur.Close(context.TODO())
	var links []Link
	if err:=cur.All(context.TODO(), &links);err != nil {
		panic(err)
  }
  return links

}

func FindLinkById(id string)  Link{
	cur,curErr := collection.Find(context.TODO(),bson.M{"shortcode": id})
	if curErr !=nil{panic(curErr)}
	defer cur.Close(context.TODO())
	var link Link
	if err:=cur.Decode(&link);err != nil {
		panic(err)
  }
  return link
}

func ListDatabases()  {
	databases,err:=client.ListDatabaseNames(context.TODO(),bson.M{})
	if err != nil {
        log.Fatal(err)
    }
    fmt.Println(databases)
}