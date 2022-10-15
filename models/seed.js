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
        garnishes: "Pineapple wedge 1 piece",
        garnish: "Pineapple wedge 1 piece",
        glassware: "Pearl Diver",
        prepInstructs: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, place pineapple wedge on side of glass, add straw and serve!",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, place pineapple wedge on side of glass, add straw and serve!"
        },
        { name: "Grog",
        ogCreator: "Don the Beachcomber",
        ingredients: "Wray and Nephew .75oz, Don Q 7 year .75oz, Bounty White .75oz, Honey Syrup .75oz, Grapefruit Juice .75oz, Lime Juice .75oz, Angostura Bitters 3 dashes, Soda Water Topper",
        ingredient: "Wray and Nephew .75oz, Don Q 7 year .75oz, Bounty White .75oz, Honey Syrup .75oz, Grapefruit Juice .75oz, Lime Juice .75oz, Angostura Bitters 3 dashes, Soda Water Topper",
        garnishes: "Lime Wheel 1, Cinnamon Stick 1",
        garnish: "Lime Wheel 1, Cinnamon Stick 1",
        glassware: "Muffintop",
        prepInstructs: "Add all ingredients (except soda) and ice to shaker tin, shake 7 times, pour over fresh ice, top with soda, lay lime wheel on top, char one end of cinnamon stick and place on top of lime wheel and serve!",
        prepInstruct: "Add all ingredients (except soda) and ice to shaker tin, shake 7 times, pour over fresh ice, top with soda, lay lime wheel on top, char one end of cinnamon stick and place on top of lime wheel and serve!"
        },
        { name: "Suffering Bastard",
        ogCreator: "Joe Scialom",
        ingredients: "Bombay Gin 1oz, Darvelle Brandy .5oz, Cane Syrup (2 parts sugar to 1 parts water) .25oz, Lime .5oz, Ginger Beer Topper",
        ingredient: "Bombay Gin 1oz, Darvelle Brandy .5oz, Cane Syrup (2 parts sugar to 1 parts water) .25oz, Lime .5oz, Ginger Beer Topper",
        garnishes: "Mint Sprig",
        garnish: "Mint Sprig",
        glassware: "Mini Tiki Mug",
        prepInstructs: "Add ingredients and ice to shaker tin (except ginger beer), shake hard 7 times, strain over fresh ice, top with ginger beer, smack mint and nestle on top, add straw and serve!",
        prepInstruct: "Add ingredients and ice to shaker tin (except ginger beer), shake hard 7 times, strain over fresh ice, top with ginger beer, smack mint and nestle on top, add straw and serve!",
        },
        { name: "Zombie",
        ogCreator: "Don the Beachcomber",
        ingredients: "Don q 7 year .5oz, Appleton Estate Signature .5oz, Lemonhart 151 .5oz, Bounty White 1oz, Velvet Falernum .25oz, Lime Juice .75oz, Grenadine .25, Don's Mix #5 .5oz, Angostura Bitters 2 dashes, Herbsaint Liquor 2 sprits",
        ingredient: "Don q 7 year .5oz, Appleton Estate Signature .5oz, Lemonhart 151 .5oz, Bounty White 1oz, Velvet Falernum .25oz, Lime Juice .75oz, Grenadine .25, Don's Mix #5 .5oz, Angostura Bitters 2 dashes, Herbsaint Liquor 2 sprits",
        garnishes: "Pineapple wedge 1 piece, Mint Sprig",
        garnish: "Pineapple wedge 1 piece, Mint Sprig",
        glassware: "Tall Collins",
        prepInstructs: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, place pineapple wedge on side of glass, nestle mint sprig next to pineapple wedge, add straw and serve!",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, place pineapple wedge on side of glass, nestle mint sprig next to pineapple wedge, add straw and serve!",
        },
        { name: "Yellow Submarine",
        ogCreator: "Beachbum Berry",
        ingredients: "Hamilton Demerara 86 1oz, Appleton Estate Signature 1oz, Giffard Banana .5oz, Creme De Cacao .25oz, Lemon Juice .75oz, Pineapple Juice  1.5oz, Cane Syrup (2 parts sugar to 1 parts water) .25oz, Angostura Bitters 2 dashes",
        ingredient: "Hamilton Demerara 86 1oz, Appleton Estate Signature 1oz, Giffard Banana .5oz, Creme De Cacao .25oz, Lemon Juice .75oz, Pineapple Juice  1.5oz, Cane Syrup (2 parts sugar to 1 parts water) .25oz, Angostura Bitters 2 dashes",
        garnishes: "Pineapple wedge 1 piece, Banana Leaf 1",
        garnish: "Pineapple wedge 1 piece, Banana Leaf 1",
        glassware: "Tall Collins",
        prepInstructs: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, nestle pineapple wedge cut side down in the middle of the ice, place banana leaf behind pineapple wedge to one side, add straw and serve!",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, nestle pineapple wedge cut side down in the middle of the ice, place banana leaf behind pineapple wedge to one side, add straw and serve!",
        },
        { name: "Port Au Prince",
        ogCreator: "Don the Beachcomber",
        ingredients: "Barbancourt 8 year 1oz, Lemonharrt 151 .25oz, Bounty White 1oz, Velvet Falernum .75oz, Grenadine .25oz, Lime Juice .75oz, Pineapple Juice 1.5oz, Angostura Bitters (or tiki bitters) 2 dashes",
        ingredient: "Barbancourt 8 year 1oz, Lemonharrt 151 .25oz, Bounty White 1oz, Velvet Falernum .75oz, Grenadine .25oz, Lime Juice .75oz, Pineapple Juice 1.5oz, Angostura Bitters (or tiki bitters) 2 dashes",
        garnishes: "Lime Wedge 1 piece, Umbrella 1 ",
        garnish: "Lime Wedge 1 piece, Umbrella 1 ",
        glassware: "Large Snifter",
        prepInstructs: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, spear umbrella through the peal side of the lime wedge and place on side of glass, add straw and serve!",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh pebble ice, spear umbrella through the peal side of the lime wedge and place on side of glass, add straw and serve!"
        },
        { name: "The Undead Gentleman",
        ogCreator: "Martin Cate",
        ingredients: "Plantation OFTD 1oz, Appleton Estate Rare Blend 1.5oz, Velvet Falernum .5oz, Cinnamon Syrup .5oz, Lime Juice .5oz, Grapefruit Juice .5oz, Angostura Bitters 1 dash",
        ingredient: "Plantation OFTD 1oz, Appleton Estate Rare Blend 1.5oz, Velvet Falernum .5oz, Cinnamon Syrup .5oz, Lime Juice .5oz, Grapefruit Juice .5oz, Angostura Bitters 1 dash, Absinthe Blanc 1 spritz",
        garnishes: "Lime twist 1, Grapefruit twist 1",
        garnish: "Lime twist 1, Grapefruit twist 1",
        glassware: "Chilled Coupe",
        prepInstructs: "Rinse coupe with absinthe, add remaining ingredients and ice to shaker tin, shake until dilluted, double strain, drape intertwined twists on side of glass and serve!",
        prepInstruct: "Rinse coupe with absinthe, add remaining ingredients and ice to shaker tin, shake until dilluted, double strain, drape intertwined twists on side of glass and serve!"
        },
        { name: "The Mastodon",
        ogCreator: "Alex Smith",
        ingredients: "Buffalo Trace 1.5oz, Appleton Estate Rare Blend 1.5oz, Liqueur 43 .5oz, Maraschino Liqueur .5oz, Lime Juice .5oz, Passion Fruit Puree 1oz, Pineapple Juice 3oz, Peychaud's Bitters 2 dashes",
        ingredient: "Buffalo Trace 1.5oz, Appleton Estate Rare Blend 1.5oz, Liqueur 43 .5oz, Maraschino Liqueur .5oz, Lime Juice .5oz, Passion Fruit Puree 1oz, Pineapple Juice 3oz, Peychaud's Bitters 2 dashes",
        garnishes: "Whole Pineapple (hollowed-out) 1",
        garnish: "Whole Pineapple (hollowed-out) 1",
        glassware: "Whole Pineapple (hollowed-out)",
        prepInstructs: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh ice, add a straw and serve!",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with fresh ice, add a straw and serve!",
        },
        { name: "Monk's Respite",
        ogCreator: "Steven Liles",
        ingredients: "Broker's Gin 1.5oz, Yellow Chartreuse .25oz, Coconut Water 3oz, Lemon Juice .5oz, Soda Water 1oz, Orange Bitters 1 dash",
        ingredient: "Broker's Gin 1.5oz, Yellow Chartreuse .25oz, Coconut Water 3oz, Lemon Juice .5oz, Soda Water 1oz, Orange Bitters 1 dash",
        garnishes: "None",
        garnish: "None",
        glassware: "Drained Young Coconut Shell",
        prepInstructs: "Add ingredients and ice to mixer tin, flash blend, dirty dump and serve!",
        prepInstruct: "Add ingredients and ice to mixer tin, flash blend, dirty dump and serve!",
        },
        { name: "Doctor Funk",
        ogCreator: "Trader Vic",
        ingredients: "Hamilton Jamaica Black 2.25oz, Herbsaint .25oz, Grenadine .25oz, Lemon Juice .5oz, Lime Juice .5, Simple Syrup .25oz, Soda Water 1oz",
        ingredient: "Hamilton Jamaica Black 2.25oz, Herbsaint .25oz, Grenadine .25oz, Lemon Juice .5oz, Lime Juice .5, Simple Syrup .25oz, Soda Water 1oz",
        garnishes: "Pineapple Fronds",
        garnish: "Pineapple Fronds 3",
        glassware: "High-ball",
        prepInstructs: "Add ingredients and ice to mixer tin, flash blend, dirty dump, place fronds side by side sticking straight up from the side of the glass, add a straw and serve!",
        prepInstruct: "Add ingredients and ice to mixer tin, flash blend, dirty dump, place fronds side by side sticking straight up from the side of the glass, add a straw and serve!",
        },
        { name: "Tradewinds",
        ogCreator: "Beachbum Berry",
        ingredients: "Gosling's Black Seal 1oz, El Dorado 3 Year 1oz, Giffard Abricot du Roussillon 1oz, Lemon Juice 1oz, Coconut Cream 1.5oz",
        ingredient: "Gosling's Black Seal 1oz, El Dorado 3 Year 1oz, Giffard Abricot du Roussillon 1oz, Lemon Juice 1oz, Coconut Cream 1.5oz",
        garnishes: "Lemon Wedge 1, Umbrella 1",
        garnish: "Lemon Wedge 1, Umbrella 1",
        glassware: "Tall Collins",
        prepInstructs: "Add ingredients and ice to mixer tin, flash blend, dirty dump, top with extra pebble until glass is full, add a straw and serve!",
        prepInstruct: "Add ingredients and ice to mixer tin, flash blend, dirty dump, top with extra pebble until glass is full, add a straw and serve!",
        },
        { name: "Three Dots and a Dash",
        ogCreator: "Don the Beachcomber",
        ingredients: "Rhum J.M E.S.B. Gold 1.5oz, Chairman's Reserve Forgotten Cask .5oz, St. Elizabeth Allspice Dram .25oz, Velvet Falernum .25oz, Orange Juice .5oz, Lime Juice .5oz, Honey Syrup .5oz, Angostura Bitters 1 dash",
        ingredient: "Rhum J.M E.S.B. Gold 1.5oz, Chairman's Reserve Forgotten Cask .5oz, St. Elizabeth Allspice Dram .25oz, Velvet Falernum .25oz, Orange Juice .5oz, Lime Juice .5oz, Honey Syrup .5oz, Angostura Bitters 1 dash",
        garnishes: "Maraschino Cherries 3, Pineapple Frond 1",
        garnish: "Maraschino Cherries 3, Pineapple Frond 1",
        glassware: "Tall Collins",
        prepInstructs: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with extra pebble until glass is full, skewer cherries and lay across glass with the pineapple fond behind them, add a straw and serve!",
        prepInstruct: "Add ingredients and ice to shaker tin, shake until dilluted, dirty dump, top with extra pebble until glass is full, skewer cherries and lay across glass with the pineapple fond behind them, add a straw and serve!"
        }
      ]

      const updatedDrinks = startDrinks.map((drink) => {

        const ingredients = drink.ingredients.split(',')
        drink.ingredients = ingredients

        const garnishes = drink.garnishes.split(',')
        drink.garnishes = garnishes      
          
        const prepInstructs = drink.prepInstructs.split(',')
        drink.prepInstructs = prepInstructs
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