////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express")
const TikiDrink = require("../models/tikiDrink")

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// GET request
///index route
router.get("/home", (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    res.render('searchHome', {username, loggedIn, userId})
})

// GET request
///index route
router.get("/search", (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    const searchItem = req.body.note
    TikiDrink.find({$or:[{ingredients: {$regex: searchItem, $options: "i"}},  
    {name: {$regex: searchItem, $options: "i"}}, {garnishes: {$regex: searchItem, $options: "i"}}, {prepInstructs: {$regex: searchItem, $options: "i"}}, {glassware: {$regex: searchItem, $options: "i"}}, {lastUpdated: {$regex: searchItem, $options: "i"}}]})
       //console.log("this is the search data ---->", searchItem)
        .populate("comments.author", "username")
        .then(tikiDrink => {
         res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})




//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router