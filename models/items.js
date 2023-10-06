// Requiring modules
const mongoose = require("mongoose");

// mongoose schema
const listSchema = new mongoose.Schema ({
    name:String
})

// Mongoose model
const Item = mongoose.model("item", listSchema);

module.exports = Item;