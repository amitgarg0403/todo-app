// creating functions for item_get, item_post, item_delete

const Item = require("../models/items")


const item_get = (req,res) => (
    
    Item.find()
    .then(foundItems=>{
        res.render("list", {title:"ToDo-App", newList: foundItems})
    })
    .catch(err=>{(console.log(err))})   
)

const item_post = function(req,res){
    const item = new Item({
        name: req.body.newItem
    })
    item.save()
    .then(result => (
        console.log("New Item Saved")
    ))
    .catch((err)=> console.log(err))
    res.redirect("/");
}

const item_delete = function(req,res){
    const checked= req.body.itemChecked
     Item.findByIdAndRemove(checked)
     .then(result => (
        console.log("Item deleted")
    ))
    .catch((err)=> console.log(err))
    res.redirect("/")
}







module.exports = {
    item_get, item_post, item_delete
}

 