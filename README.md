Overview:

"MyTiki" is an app that provides 10 classic tiki cocktail recipes that are available to be viewed by any logged in user. The user is also able to customize any of the provided recipies and add them to their own "original cocktails" folder, or create their own from scratch! The user also has the ability to filter the shown cocktails by keywords, and add any cocktails they wish to their "favorites" folder. This app will be built using Mongoose, Liquid.js and Bootstrap.

![General vibe picture](/tikiappwireframes/WireframesTIKIApp-Copy%20of%20Aloha.drawio.png)


User Stories:

As a user, I want the ability to... 
  - sign up.
  - log in.  
  - sign out. 
  - be denied access if I am under 21 years of age.
  - keep my original recipes hidden from other users.
  - create my own recipes. 
  - update my own recipes.
  - customize provided recipes.
  - add additional ingredient (and ingredient amout) input boxes if the recipe calls for it.
  - add additional garnish (and garnish amout) input boxes if the recipe calls for it.
  - add customized recipes to my "MyOriginals" folder.
  - view all of the provided recipes. 
  - view all of my original recipes in a list. 
  - view all of the recipes I have favorited.
  - read more details of individual recipes. 
  - see the original creator of the classic tiki cocktails.
  - see when my original cocktails were last updated.
  - delete my recipes.  
  - favorite the provided classic tiki recipes.  
  - remove recipes from my favorites.
  - filter the shown classic recipes by keywords.
  - filter my own recipes by keywords.

  Mon: Pseudo code layout
  Tues: REST tikiDrinks
  Wed: REST users
  Thurs: REST Favs/Customized drinks
  Fri: Views
  Sat: Views
  Sun: Graphic design/ Bells and whistles


Model Exapmle:

tikiDrink {
    name: "Mai Tai",
    ingredient1: "La Favorite Blanc",
    ingredient1Amount: "1oz",
    ingredient2: "Dry Curacao",
    ingredient2Amount: ".75oz",
    ingredient3: "Chairman's Reserve",
    ingredient3Amount: "1oz",
    ingredient4: "El Dorado 5 year",
    ingredient4Amount: "1oz",
    ingredient5: "Orgeat",
    ingredient5Amount: ".5oz",
    ingredient6: "Lime juice",
    ingredient6Amount: ".75oz",
    garnish1: "Pineapple wedge",
    garnish1Amount: "1",
    glassware: "Pearl Diver"
}


  Wireframes/Screenshots:

  "Aloha (welcome)" Page
  ![](/tikiappwireframes/WireframesTIKIAppAloha.png)
  "Sign up" Page
  ![](/tikiappwireframes/WireframesTIKIAppSignup.png)
  "Login" Page
  ![](/tikiappwireframes/WireframesTIKIAppLogin.png)
  "Logout" Page
  ![](/tikiappwireframes/WireframesTIKIAppLogout.png)
  "Sorry (age requirment not met)" Page
  ![](/tikiappwireframes/WireframesTIKIAppSorry.png)
  "Classic Tiki" Index Page
  ![](/tikiappwireframes/WireframesTIKIAppClassicsIndex1.png)
  "Classic Tiki" Show Page
  ![](/tikiappwireframes/WireframesTIKIAppClassicsShow.png)
  "MyOriginals" Index Page
  ![](/tikiappwireframes/WireframesTIKIApp-MyOriginals%20Index.drawio.png)
  "MyOriginals" Show Page
  ![](/tikiappwireframes/WireframesTIKIAppMyOriginalsShow.png)
  "MyOriginals" Edit Page
  ![](/tikiappwireframes/WireframesTIKIAppMyOriginalsEdit.png)
  "Personal Favs" Index Page
  ![](/tikiappwireframes/WireframesTIKIAppPersonalFavsIndex1.png)
  "Create New" Page
  ![](/tikiappwireframes/WireframesTIKIAppNewCreation.png)


  ERD:

  ![General vibe picture](/tikiappwireframes/TikiAppERD2.png)