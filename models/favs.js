// ////////////////////////////////////////////////
// // Our Models
// ////////////////////////////////////////////////
// const mongoose = require('./connection')
// const User = require('./user')

// const { Schema, model } = mongoose

// // Make favs schema

// const favsSchema = new Schema({
//     name: String,
//     ingredient: [String],
//     garnish: [String],
//     glassware: String,
//     prepInstr: [String],
//     owner: {
//        // here we can refer to an objectId
//        // by declaring that as the type
//        type: Schema.Types.ObjectId,
//        // this line, tells us to refer to the User model
//       ref: 'User'
//     },
// }, {timestamps: true })

// // make tikiDrink model
// const TikiDrink = model("TikiDrink", tikiDrinkSchema)

// ///////////////////////////////////////////////////
// // Export Model
// ///////////////////////////////////////////////////
// module.exports = TikiDrink