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

// POST
// only loggedIn users can post comments
router.post("/:tikiDrinkId", (req, res) => {
    const tikiDrinkId = req.params.tikiDrinkId

    if (req.session.loggedIn) {
        // we want to adjust req.body so that the author is automatically assigned
        req.body.author = req.session.userId
    } else {
        res.sendStatus(401)
    }
    // find a specific drink
    TikiDrink.findById(tikiDrinkId)
        // do something if it works
        //  --> send a success response status and maybe the comment? maybe the fruit?
        .then(tikiDrink => {
            // push the comment into the fruit.comments array
            tikiDrink.comments.push(req.body)
            // we need to save the fruit
            return tikiDrink.save()
        })
        .then(tikiDrink => {
            res.redirect(`/tikiDrink/${tikiDrink.id}`)
        })
        // do something else if it doesn't work
        //  --> send some kind of error depending on what went wrong
        .catch(err => res.redirect(`/error?error=${err}`))
})


// DELETE
// only the author of the comment can delete it
router.delete('/delete/:tikiDrinkId/:commId', (req, res) => {
    // isolate the ids and save to vars for easy ref
    const tikiDrinkId = req.params.tikiDrinkId 
    const commId = req.params.commId
    // get the fruit
    TikiDrink.findById(tikiDrinkId)
        .then(tikiDrink => {
            // get the comment
            // subdocs have a built in method that you can use to access specific subdocuments when you need to.
            // this built in method is called .id()
            const theComment = tikiDrink.comments.id(commId)
            console.log('this is the comment that was found', theComment)
            // make sure the user is logged in
            if (req.session.loggedIn) {
                // only let the author of the comment delete it
                if (theComment.author == req.session.userId) {
                    // find some way to remove the comment
                    // here's another built in method
                    theComment.remove()
                    tikiDrink.save()
                    res.redirect(`/tikiDrink/${tikiDrink.id}`)
                    // return the saved fruit
                    //return zeldaChar.save()
                } else {
                    const err = 'you%20are%20not%20authorized%20for%20this%20action'
                    res.redirect(`/error?error=${err}`)
                }
            } else {
                const err = 'you%20are%20not%20authorized%20for%20this%20action'
                res.redirect(`/error?error=${err}`)
            }
        })
        // send an error if error
        .catch(err => res.redirect(`/error?error=${err}`))

})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router