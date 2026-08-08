////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
const mongoose = require('./connection')
const User = require('./user')// unused import
const commentSchema = require('./comment')

const { Schema, model } = mongoose

// Make tikiDrink schema

const tikiDrinkSchema = new Schema({ // capitalize our schemas, just like classes 
    name: String,
    img: String,
    ogCreator: String,
    lastUpdated: String,
    ingredient: String,
    garnish: String,
    glassware: String,
    prepInstruct: String,
    fav: Boolean,
    ingredients: [],
    prepInstructs: [],
    garnishes: [],
    owner: {
       // here we can refer to an objectId
       // by declaring that as the type
       type: Schema.Types.ObjectId, // sneaky space here throwing off indentation 
       // this line, tells us to refer to the User model
      ref: 'User'
    },
    comments: [commentSchema],
    creator: String,
}, {timestamps: true })

// make zeldaChar model
const TikiDrink = model("TikiDrink", tikiDrinkSchema)
// make favs model
//////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = TikiDrink
