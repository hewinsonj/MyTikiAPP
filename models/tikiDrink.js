////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
const mongoose = require('./connection')
const User = require('./user')

const { Schema, model } = mongoose

// Make tikiDrink schema

const tikiDrinkSchema = new Schema({
    name: String,
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
       type: Schema.Types.ObjectId,
       // this line, tells us to refer to the User model
      ref: 'User'
    },
    creator: String,
}, {timestamps: true })

// make zeldaChar model
const TikiDrink = model("TikiDrink", tikiDrinkSchema)
// make favs model
const Favs = model("Favs", tikiDrinkSchema)

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = TikiDrink
module.exports = Favs