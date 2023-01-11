/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config() // Load ENV Variables
const express = require("express") // import express
const path = require("path") // import path module
const TikiDrinkRouter = require('./controllers/tikiDrinkControllers')
const UserRouter = require('./controllers/userControllers')
const middleware = require('./utils/middleware')
const CommentRouter = require('./controllers/commentControllers')
const SearchRouter = require('./controllers/searchControllers')
const RumRouter = require('./controllers/rumControllers')

/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require('liquid-express-views')(express())

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
middleware(app)

////////////////////////////////////////////
// Home Route
////////////////////////////////////////////
app.get("/", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/tikiDrink')
    } else {
        res.render('index.liquid')
    }
  })

/////////////////////////////////////////////
// Register our Routes
/////////////////////////////////////////////
app.use('/tikiDrink', TikiDrinkRouter)
app.use('/users', UserRouter)
app.use('/comments', CommentRouter)
app.use('/search', SearchRouter)
app.use('/rumIndex', RumRouter)



// this renders an error page, gets the error from a url request query
app.get('/error', (req, res) => {
    // get session variables
    const { username, loggedIn, userId } = req.session
    const error = req.query.error || 'This page does not exist silly goose'
  
    res.render('error.liquid', { error, username, loggedIn, userId })
  })
  
  app.all('*', (req, res) => {
    res.redirect('/error')
  })
//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now listening to the soothing sounds of Martin Denny on port ${PORT}`))

//END

