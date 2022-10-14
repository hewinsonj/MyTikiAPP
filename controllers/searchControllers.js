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
    const tikiDrink = TikiDrink.find()

    const searchItem = req.body
       //req.query

        console.log("this is the search data ---->", searchItem)
        res.render('search', {tikiDrink})
        // .then(tikiDrink => {
        //     const username = req.session.username
        //     const loggedIn = req.session.loggedIn
        //     const userId = req.session.userId
            
        //     res.render('search', { tikiDrink})
        // })
        // .catch(err => res.redirect(`/error?error=${err}`))
})




//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router