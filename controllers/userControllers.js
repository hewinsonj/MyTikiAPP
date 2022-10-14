////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router()

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// GET route for sign up
// renders a page with a signup form
router.get('/signup', (req, res) => {
    res.render('users/signup')
})

// POST route for sign up
router.post('/signup', async (req, res) => {
    console.log('this is our initial req.body', req.body)
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    if(req.body.age >20 ){
        User.create(req.body)
    
        // if successful, console log the user(for now)
        .then(user => {
            //if(user.age < 21){
                
            //}else{
            console.log(user)
            res.redirect('/users/login')
        }) // }
            .catch(err => {
                res.redirect(`/error?error=user%20already%20exists${err}`)
            })
       
    }else{
        res.redirect('/users/denied')
    }

})

// GET
// SENDS to the denied page
router.get('/denied', (req, res) => {
    // const username = req.session.username
    // const loggedIn = req.session.loggedIn
    // const userId = req.session.userId
    res.render('users/denied')

})

// // DELETE route for log out 
// router.delete('/denied', (req, res) => {

//     User.findOneAndRemove({_id: req.params.id}
//     .then(user =>{
//     res.redirect('/denied')
//     })
// })

// GET route for logging in
// renders a page with a signup form
router.get('/login', (req, res) => {
    res.render('users/login')
})

// POST route for log in
router.post('/login', async (req, res) => {
    // get our data from the req body, saved as separate variables
    const { username, password } = req.body

    // search the db for a user with that username
    User.findOne({ username })
        .then(async (user) => {
            // check if they exist
            if (user) {
                // compare the password
                // bcrypt.compare -> evals to a truthy or a falsy
                const result = await bcrypt.compare(password, user.password)

                if (result) {
                    // this is where we use the session object
                    // session object lives in our request
                    req.session.username = username
                    req.session.loggedIn = true
                    req.session.userId = user.id 
                    console.log('this is req.session', req.session) 
                    res.redirect('/tikiDrink')
                } else {
                    res.redirect(`/error?error=username%20or%20password%20incorrect`)
                }
            } else {
                res.redirect(`/error?error=user%20does%20not%20exist`)
            }
        })
        .catch(err => {
            res.redirect(`/error?error=${err}`)
        })
})




// GET
// SENDS to the logout page
router.get('/logout', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    res.render('users/logout', { username, loggedIn, userId})
})

// DELETE route for log out 
router.delete('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/')
    })
})

/////////////////////////////////////////
// Export Router
/////////////////////////////////////////

module.exports = router