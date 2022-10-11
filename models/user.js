///////////////////////////////////////////////////////////
// User resource (schema and model)
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Import our dependencies
///////////////////////////////////////////////////////////
const mongoose = require('./connection')
const { Schema, model } = mongoose

///////////////////////////////////////////////////////////
// define our user schema and model
///////////////////////////////////////////////////////////
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const User = model("User", userSchema)


///////////////////////////////////////////////////////////
// Export our model
///////////////////////////////////////////////////////////

module.exports = User