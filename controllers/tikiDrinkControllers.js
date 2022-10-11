/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const express = require("express") // import express
const TikiDrink = require("../models/tikiDrink")
/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////////
// ROUTES
/////////////////////////////////////////////
/// '/mine' is where "MyOriginals" will live. 

// GET request
///index route
router.get("/", (req, res) => {
    TikiDrink.find({ owner: null })
        //.populate("comments.author", "username")
        
        .then(tikiDrink => {
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
            
            res.render('tikiDrink/index', { tikiDrink, username, loggedIn, userId})
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})

// GET for new tikiDrinks
// renders the form to create a drink
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    res.render('tikiDrink/new', { username, loggedIn, userId })
})

// POST request
// create route -> gives the ability to create new drinks
router.post("/", (req, res) => {
    // inside this function, that will be referred to as req.body
    // this is going to add ownership, via a foreign key reference, to our drinks
    // basically, all we have to do, is append our request body, with the `owner` field, 
    //and set the value to the logged in user's id
    req.body.owner = req.session.userId
    console.log('the tikiDrink from the form', req.body)
    // we'll use the mongoose model method `create` to make a new drink
    TikiDrink.create(req.body)
        .then(tikiDrink => {
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
            res.redirect('/tikiDrink')
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})

// GET request
// only drinks owned by logged in user
// we're going to build another route, that is owner specific, to list all the drinks owned by a certain(logged in) user
router.get('/mine', (req, res) => {
    // find the drinks, by ownership
    TikiDrink.find({ owner: req.session.userId })
    // then display the drinks
        .then(tikiDrink => {
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
            res.render('tikiDrink/index', { tikiDrink, username, loggedIn, userId })
        })
    // or throw an error if there is one
        .catch(err => res.redirect(`/error?error=${err}`))
})

// GET request to show the update page
router.get("/edit/:id", (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    const tikiDrinkId = req.params.id
    TikiDrink.findById(tikiDrinkId)
        // render the edit form if there is a drink
        .then(tikiDrink => {

            res.render('tikiDrink/edit', { tikiDrink, username, loggedIn, userId })
        })
        // redirect if there isn't
        .catch(err => {
            res.redirect(`/error?error=${err}`)
        })
    // res.send('edit page')
})

// PUT request
// update route -> updates a specific drink
router.put("/:id", (req, res) => {
    console.log("req.body initially", req.body)
    const id = req.params.id
    console.log('req.body after changing checkbox value', req.body)
    TikiDrink.findById(id)
        .then(tikiDrink => {
            //tikiDrink.fav == true
            //tikiDrink.updateOne(tikiDrink.fav == true)
            if (tikiDrink.owner == req.session.userId) {
                // must return the results of this query
                // var newId2 = new mongoose.mongo.ObjectId();
                return tikiDrink.updateOne(req.body)
            } else {
                res.sendStatus(401)
            }
        })
        .then(() => {
            res.redirect(`/tikiDrink/${id}`)
            
            console.log(id)
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})

///// DELETE Request
router.delete('/:id', (req, res) => {
    // get the fruit id
    const tikiDrinkId = req.params.id

    // delete and REDIRECT
    TikiDrink.findByIdAndRemove(tikiDrinkId)
        .then(tikiDrink => {
            // if the delete is successful, send the user back to the index page
            res.redirect('/tikiDrink')
        })
        .catch(err => {
            res.redirect(`/error?error=${err}`)
        })
})

// SHOW request
// read route -> finds and displays a single resource
router.get("/:id", (req, res) => {
    const id = req.params.id

    TikiDrink.findById(id)
        // populate will provide more data about the document that is in the specified collection
        // the first arg is the field to populate
        // the second can specify which parts to keep or which to remove
        // .populate("owner", "username")
        // we can also populate fields of our subdocuments
        //.populate("comments.author", "username")
        //const favB = button.findById("favButt")
        .then(tikiDrink => {
            $(favB).button('toggle')
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
            res.render('tikiDrink/show', { tikiDrink, username, loggedIn, userId })
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router