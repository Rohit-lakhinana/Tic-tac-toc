//RUN THE SERVER AND CHECK THE OUTPUT IN BROWSER
//http://localhost:9005/tic-tac-toe
const express = require("express");
const path = require("path");

//express will give us all methods and servers to create API'S
const app = express();

//ADDING PUBLIC FOLDER TO RUN STATIC-FILES
//MIDDLEWARE :- conver any data intp JSON format
app.use(express.static("public"))

//EXPRESS MIDDLEWARE
//THIS converts any data into STRING
app.use(express.json())


//GET API
app.get("/game", function(req,res){
    res.sendFile("/game.html",{
        root: path.join(__dirname, "public")
    })
})


//SERVER CODE
app.listen(2000, function(){
    console.log("server is started with the port number 2000")
})