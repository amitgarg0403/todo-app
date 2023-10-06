// Requiring modules
const express = require("express");
const Item = require("../models/items")
const {item_get, item_post, item_delete} = require("../controllers/itemController")


// creating an instance of Express Router
const router = express.Router();


// get request for homeroute
router.get("/", item_get)


// post method for reading input items
router.post("/", item_post)


// for deleting post 
router.post("/delete", item_delete)


module.exports = router;