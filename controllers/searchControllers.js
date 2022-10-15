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
router.get("/", (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    const searchItem = req.body
    TikiDrink.find({contains: searchItem})
       // console.log("this is the search data ---->", searchItem)
        .populate("comments.author", "username")
        .then(tikiDrink => {
        res.render('search', { tikiDrink, username, loggedIn, userId})
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})




//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router