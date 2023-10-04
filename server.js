// requiring all modules and packages here
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

// Middlewares
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')


// connect to mongodb
// this url if we want to connect to monogodb cluster URL= "mongodb+srv://new-test:<password>>@todolist.bj1hus3.mongodb.net/?retryWrites=true&w=majority"
URL1="mongodb://127.0.0.1:27017/toDoListDB"
mongoose.connect(URL1)
.then(()=> (console.log("connected to MongoDB")))
.catch((err)=>( console.log(err)))


// mongoose schema
const listSchema = new mongoose.Schema ({
    name:String
})

// Mongoose model
const Item = mongoose.model("item", listSchema);


// adding Public folder for css and img files
app.use(express.static("public"))


// get request for homeroute
app.get("/", function(req,res){
    Item.find()
    .then(foundItems=>{
        res.render("list", {title:"ToDo-App", newList: foundItems})
    })
    .catch(err=>{(console.log(err))})   
})
    

// post method for reading input items
app.post("/", function(req,res){
    const item = new Item({
        name: req.body.newItem
    })
    item.save()
    .then(result => (
        console.log("New Item Saved")
    ))
    .catch((err)=> console.log(err))
    res.redirect("/");
})

// for deleting post 
app.post("/delete", function(req,res){
    const checked= req.body.itemChecked
     Item.findByIdAndRemove(checked)
     .then(result => (
        console.log("Item deleted")
    ))
    .catch((err)=> console.log(err))
    res.redirect("/")
})

    
// listenig at Port 
app.listen("3000", ()=>console.log("Server started at Port 3000"))


