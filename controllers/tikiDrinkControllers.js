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

// GET request to show the customize page
router.get("/customize/:id", (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    const tikiDrinkId = req.params.id
    console.log(ingredients)
    const ingredient = req.body.ingredients.join(",")
    req.body.ingredient = ingredient
    //const ingredArr = req.body.ingredients.join(",")
    //req.body.ingredient = ingredArr
    TikiDrink.findById(tikiDrinkId)
        // render the edit form if there is a drink
        .then(tikiDrink => {

            res.render('tikiDrink/customize', { tikiDrink, username, loggedIn, userId })
        })
        // redirect if there isn't
        .catch(err => {
            res.redirect(`/error?error=${err}`)
        })
    // res.send('edit page')
})

// POST request
// create route -> gives the ability to create new drinks
router.post("/", (req, res) => {
    // inside this function, that will be referred to as req.body
    // this is going to add ownership, via a foreign key reference, to our drinks
    // basically, all we have to do, is append our request body, with the `owner` field, 
    //and set the value to the logged in user's id
    req.body.fav = req.body.fav === 'on' ? true : false
    req.body.owner = req.session.userId
    const ingredArr = req.body.ingredient.split(",")
    req.body.ingredients = ingredArr
    const garnishArr = req.body.garnish.split(",")
    req.body.garnishes = garnishArr
    const prepArr = req.body.prepInstruct.split(",")
    req.body.prepInstructs = prepArr
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
    
        // we want to adjust req.body so that the author is automatically assigned
   
    // then display the drinks
        .then(tikiDrink => {
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
            if (req.session.loggedIn) {
            res.render('tikiDrink/index', { tikiDrink, username, loggedIn, userId })
            } else{
                res.redirect(`/error?error=must%20log%20in%20to%20continue`)
            }
        })
    // or throw an error if there is one
        .catch(err => res.redirect(`/error?error=${err}`))
})

// GET request
// only drinks FAVORITED by user
// we're going to build another route, that is owner specific, to list all the drinks owned by a certain(logged in) user
router.get('/favs', (req, res) => {
    // find the drinks, by favorship
    TikiDrink.find({ fav: true })
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


// FAVS PUT request
// update route -> updates a specific drink
router.put("/:id", (req, res) => {
    console.log("req.body initially", req.body)
    const id = req.params.id
    console.log("this is it", req.params.id)
    const ingredArr = req.body.ingredient.split(",")
    req.body.ingredients = ingredArr
    req.body.fav = req.body.fav === 'on' ? true : false
    TikiDrink.findById(id)
        .then(tikiDrink => {
            return tikiDrink.updateOne(req.body)
        })
        .then(() => {
            res.redirect(`/tikiDrink/${id}`)
            
            console.log(id)
        })
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

//PUT request
//update route -> updates a specific drink
router.put("/:id", (req, res) => {
    console.log("req.body initially", req.body)
    const id = req.params.id
    const ingredArr = req.body.ingredient.split(",")
    req.body.ingredients = ingredArr
    req.body.fav = req.body.fav === 'on' ? true : false
    console.log('req.body after changing checkbox value', req.body)
    TikiDrink.findById(id)
        .then(tikiDrink => {
            if (tikiDrink.owner == req.session.userId) {
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
            res.redirect('/tikiDrink/mine')
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
            const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId

            res.render('tikiDrink/show', { tikiDrink, username, loggedIn, userId })
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})

// SENDS to page
router.get('/tikiDrink/favs', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    //return (tikiDrink.fav ? true : false)
    
    res.render('/tikiDrink/favs', { username, loggedIn, userId})
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router