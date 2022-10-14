///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('./connection')
const TikiDrink = require('./tikiDrink')

///////////////////////////////////////
// Seed Script code
///////////////////////////////////////
// first we need our connection saved to a variable for easy reference
const db = mongoose.connection

db.on('open', (req, res) => {
    const startDrinks = [
        { name: "Mai Tai",
        img: "",
        ogCreator: "Don the Beachcomber",
        ingredients: "La Favorite Blanc 1oz, Chairman's Reserve 1oz, El Dorado 5 year 1oz, Dry Curacao .75oz, Orgeat .5oz, Lime Juice .75oz, Angostura Bitters 2 dashes",
        ingredient: "La Favorite Blanc 1oz, Chairman's Reserve 1oz, El Dorado 5 year 1oz, Dry Curacao .75oz, Orgeat .5oz, Lime Juice .75oz, Angostura Bitters 2 dashes",
        garnish: "Pineapple wedge 1 piece",
        glassware: "Pearl Diver",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, place pineapple wedge on side of glass, add straw and serve!",
        },
        { name: "Grog",
        ogCreator: "Don the Beachcomber",
        ingredients: "Wray and Nephew .75oz, Don Q 7 year .75oz, Bounty White .75oz, Honey Syrup .75oz, Grapefruit Juice .75oz, Lime Juice .75oz, Angostura Bitters 3 dashes, Soda Water Topper",
        ingredient: "Wray and Nephew .75oz, Don Q 7 year .75oz, Bounty White .75oz, Honey Syrup .75oz, Grapefruit Juice .75oz, Lime Juice .75oz, Angostura Bitters 3 dashes, Soda Water Topper",
        garnish: "Lime Wheel 1, Cinnamon Stick 1",
        glassware: "Muffintop",
        prepInstruct: "Add all ingredients (except soda) and ice to shaker tin, shake 7 times, pour over fresh ice, top with soda, lay lime wheel on top, char one end of cinnamon stick and place on top of lime wheel and serve!"
        },
        { name: "Suffering Bastard",
        ogCreator: "Joe Scialom",
        ingredients: "Bombay Gin 1oz, Darvelle Brandy .5oz, Cane Syrup (2 parts sugar to 1 parts water) .25oz, Lime .5oz, Ginger Beer Topper",
        ingredient: "Bombay Gin 1oz, Darvelle Brandy .5oz, Cane Syrup (2 parts sugar to 1 parts water) .25oz, Lime .5oz, Ginger Beer Topper",
        garnish: "Mint Sprig",
        glassware: "Mini Tiki Mug",
        prepInstruct: "Add ingredients and ice to shaker tin (except ginger beer), shake hard 7 times, strain over fresh ice, top with ginger beer, smack mint and nestle on top, add straw and serve!",
        },
        { name: "Zombie",
        ogCreator: "Don the Beachcomber",
        ingredients: "Don q 7 year .5oz, Appleton Estate Signature .5oz, Lemonhart 151 .5oz, Bounty White 1oz, Velvet Falernum .25oz, Lime Juice .75oz, Grenadine .25, Don's Mix #5 .5oz, Angostura Bitters 2 dashes, Herbsaint Liquor 2 sprits",
        ingredient: "Don q 7 year .5oz, Appleton Estate Signature .5oz, Lemonhart 151 .5oz, Bounty White 1oz, Velvet Falernum .25oz, Lime Juice .75oz, Grenadine .25, Don's Mix #5 .5oz, Angostura Bitters 2 dashes, Herbsaint Liquor 2 sprits",
        garnish: "Pineapple wedge 1 piece, Mint Sprig",
        glassware: "Tall Collins",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, place pineapple wedge on side of glass, nestle mint sprig next to pineapple wedge, add straw and serve!",
        },
        { name: "Yellow Submarine",
        ogCreator: "Beachbum Berry",
        ingredients: "Hamilton Demerara 86 1oz, Appleton Estate Signature 1oz, Giffard Banana .5oz, Creme De Cacao .25oz, Lemon Juice .75oz, Pineapple Juice  1.5oz, Cane Syrup (2 parts sugar to 1 parts water) .25oz, Angostura Bitters 2 dashes",
        ingredient: "Hamilton Demerara 86 1oz, Appleton Estate Signature 1oz, Giffard Banana .5oz, Creme De Cacao .25oz, Lemon Juice .75oz, Pineapple Juice  1.5oz, Cane Syrup (2 parts sugar to 1 parts water) .25oz, Angostura Bitters 2 dashes",
        garnish: "Pineapple wedge 1 piece, Banana Leaf 1",
        glassware: "Tall Collins",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, nestle pineapple wedge cut side down in the middle of the ice, place banana leaf behind pineapple wedge to one side, add straw and serve!",
        },
        { name: "Port Au Prince",
        ogCreator: "Don the Beachcomber",
        ingredients: "Barbancourt 8 year 1oz, Lemonharrt 151 .25oz, Bounty White 1oz, Velvet Falernum .75oz, Grenadine .25oz, Lime Juice .75oz, Pineapple Juice 1.5oz, Angostura Bitters (or tiki bitters) 2 dashes",
        ingredient: "Barbancourt 8 year 1oz, Lemonharrt 151 .25oz, Bounty White 1oz, Velvet Falernum .75oz, Grenadine .25oz, Lime Juice .75oz, Pineapple Juice 1.5oz, Angostura Bitters (or tiki bitters) 2 dashes",
        garnish: "Lime Wedge 1 piece, Umbrella 1 ",
        glassware: "Large Snifter",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, spear umbrella through the peal side of the lime wedge and place on side of glass, add straw and serve!",
        },
        { name: "The Undead Gentleman",
        ogCreator: "Martin Cate",
        ingredients: "Plantation OFTD 1oz, Appleton Estate Rare Blend 1.5oz, Velvet Falernum .5oz, SC Cinnamon Syrup .5oz, Lime Juice .5oz, Grapefruit Juice .5oz, Angostura Bitters 1 dash",
        ingredient: "Plantation OFTD 1oz, Appleton Estate Rare Blend 1.5oz, Velvet Falernum .5oz, SC Cinnamon Syrup .5oz, Lime Juice .5oz, Grapefruit Juice .5oz, Angostura Bitters 1 dash, Absinthe Blanc 1 spritz",
        garnish: "Lime twist 1, Grapefruit twist 1",
        glassware: "Chilled Coupe",
        prepInstruct: "Rinse coupe with absinthe, add remaining ingredients and ice to shaker tin, shake until dilluted, double strain, drape intertwined twists on side of glass and serve",
        },
        { name: "The Mastodon",
        ogCreator: "Alex Smith",
        ingredients: "Buffalo Trace 1.5oz, Appleton Estate Rare Blend 1.5oz, Liqueur 43 .5oz, Maraschino Liqueur .5oz, Lime Juice .5oz, Passion Fruit Puree 1oz, Pineapple Juice 3oz, Peychaud's Bitters 2 dash",
        ingredient: "Buffalo Trace 1.5oz, Appleton Estate Rare Blend 1.5oz, Liqueur 43 .5oz, Maraschino Liqueur .5oz, Lime Juice .5oz, Passion Fruit Puree 1oz, Pineapple Juice 3oz, Peychaud's Bitters 2 dash",
        garnish: "Whole Pineapple (hollowed-out) 1",
        glassware: "Chilled Coupe",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump,   and serve",
        }

      ]

      const updatedDrinks = startDrinks.map((drink) => {
        const ingredients = drink.ingredients.split(',')
        drink.ingredients = ingredients
        return drink
      })


      // Delete every drink in DB
      TikiDrink.deleteMany({owner: null})

    .then(deletedDrinks => {
      console.log('this is what .deleteMany returns', deletedDrinks)
      
      // create a bunch of new drinks from startDrinks
      TikiDrink.create(updatedDrinks)
          .then(data => {
              console.log('here are the newly created drinks', data)
              // always close connection to the db
              db.close()
          })
          .catch(error => {
              console.log(error)
              // always close connection to the db
              db.close()
          })
    })
    .catch(error => {
        console.log(error)
        // always close connection to the db
        db.close()
    })
})