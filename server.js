// requiring all modules and packages here
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const itemRoutes = require("./routes/itemRoutes")

// Middlewares
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')


// connect to mongodb
// if we want to connect to monogodb cluster then use this URL= "mongodb+srv://new-test:<password>>@todolist.bj1hus3.mongodb.net/?retryWrites=true&w=majority"
URL1="mongodb://127.0.0.1:27017/toDoListDB"
mongoose.connect(URL1)
.then(()=> (console.log("connected to MongoDB")))
.then(()=> (app.listen("3000", ()=>console.log("Server started at Port 3000"))))
.catch((err)=>( console.log(err)))


// adding Public folder for css and img files
app.use(express.static("public"))


// routes
app.use(itemRoutes);
