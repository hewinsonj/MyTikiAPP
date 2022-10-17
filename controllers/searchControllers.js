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
    req.body.inlineCheckbox1 = req.body.inlineCheckbox1 === 'on' ? true : false
    req.body.inlineCheckbox2 = req.body.inlineCheckbox2 === 'on' ? true : false
    req.body.inlineCheckbox3 = req.body.inlineCheckbox3 === 'on' ? true : false
    req.body.inlineCheckbox4 = req.body.inlineCheckbox4 === 'on' ? true : false
    req.body.inlineCheckbox5 = req.body.inlineCheckbox5 === 'on' ? true : false
    req.body.inlineCheckbox6 = req.body.inlineCheckbox6 === 'on' ? true : false
    req.body.inlineCheckbox7 = req.body.inlineCheckbox7 === 'on' ? true : false
    req.body.inlineCheckbox8 = req.body.inlineCheckbox8 === 'on' ? true : false
    const checkBox1 = req.body.inlineCheckbox1
    const checkBox2 = req.body.inlineCheckbox2
    const checkBox3 = req.body.inlineCheckbox3
    const checkBox4 = req.body.inlineCheckbox4
    const checkBox5 = req.body.inlineCheckbox5
    const checkBox6 = req.body.inlineCheckbox6
    const checkBox7 = req.body.inlineCheckbox7
    const checkBox8 = req.body.inlineCheckbox8

    if(checkBox1 == true) {
        TikiDrink.find({name: {$regex: searchItem, $options: "i"}})
            //console.log("this is the search data ---->", searchItem)
            .populate("comments.author", "username")
            .then(tikiDrink => {
                res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
            })
            .catch(err => res.redirect(`/error?error=${err}`))
    } else if(checkBox2 == true) {
        TikiDrink.find({ingredients: {$regex: searchItem, $options: "i"}})
            //console.log("this is the search data ---->", searchItem)
            .populate("comments.author", "username")
            .then(tikiDrink => {
                res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
            })
            .catch(err => res.redirect(`/error?error=${err}`))
    } else if(checkBox3 == true) {
        TikiDrink.find({garnishes: {$regex: searchItem, $options: "i"}})
            //console.log("this is the search data ---->", searchItem)
            .populate("comments.author", "username")
            .then(tikiDrink => {
                res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
            })
            .catch(err => res.redirect(`/error?error=${err}`))

    } else if(checkBox4 == true) {
        TikiDrink.find({ogCreator: {$regex: searchItem, $options: "i"}})
            //console.log("this is the search data ---->", searchItem)
            .populate("comments.author", "username")
            .then(tikiDrink => {
                res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
            })
            .catch(err => res.redirect(`/error?error=${err}`))

    } else if(checkBox5 == true) {
        TikiDrink.find({lastUpdated: {$regex: searchItem, $options: "i"}})
            //console.log("this is the search data ---->", searchItem)
            .populate("comments.author", "username")
            .then(tikiDrink => {
                res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
            })
            .catch(err => res.redirect(`/error?error=${err}`))

    } else if(checkBox6 == true) {
        TikiDrink.find({glassware: {$regex: searchItem, $options: "i"}})
            //console.log("this is the search data ---->", searchItem)
            .populate("comments.author", "username")
            .then(tikiDrink => {
                res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
            })
            .catch(err => res.redirect(`/error?error=${err}`))

    } else if(checkBox7 == true) {
        TikiDrink.find({prepInstructs: {$regex: searchItem, $options: "i"}})
            //console.log("this is the search data ---->", searchItem)
            .populate("comments.author", "username")
            .then(tikiDrink => {
                res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
            })
            .catch(err => res.redirect(`/error?error=${err}`))
    } else if(checkBox8 == true) {
        TikiDrink.find({comments: {$regex: searchItem, $options: "i"}})
            //console.log("this is the search data ---->", searchItem)
            .populate("comments.author", "username")
            .then(tikiDrink => {
                res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
            })
            .catch(err => res.redirect(`/error?error=${err}`))

    } else {
    TikiDrink.find({$or:[{ingredients: {$regex: searchItem, $options: "i"}},  
    {name: {$regex: searchItem, $options: "i"}}, {garnishes: {$regex: searchItem, $options: "i"}}, {prepInstructs: {$regex: searchItem, $options: "i"}}, {glassware: {$regex: searchItem, $options: "i"}}, {lastUpdated: {$regex: searchItem, $options: "i"}}, {ogCreator: {$regex: searchItem, $options: "i"}}]})
        //console.log("this is the search data ---->", searchItem)
        .populate("comments.author", "username")
        .then(tikiDrink => {
            res.render('search', {tikiDrink, username, loggedIn, userId, searchItem})
        })
        .catch(err => res.redirect(`/error?error=${err}`))
    }

})




//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router