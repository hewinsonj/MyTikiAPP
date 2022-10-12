// const favBut = document.findById("favBut")
// const tiki = document.findById(`${tikiDrink.id}`)
//         favBut.onclick= () => {
//             //return (tikiDrink.fav ? true : false)
//             console.log(tiki.fav)
//         }

const favDrink = () => {
    const id = req.params.id
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    return (tikiDrink.fav ? true : false)

    .then(tikiDrink => {

        res.render('/:id', { tikiDrink, username, loggedIn, userId })
    })
}

const addBox= () => {
    const inputBox = document.createElement('input')
    const inputLabel = document.createElement('label')
    inputLabel.innerText = "Ingredient"
    inputLabel.classList.add("form-label")
    inputBox.placeholder = "put stuff here"
    inputBox.classList.add("form-control")
    fieldset.appendChild(inputLabel)
    fieldset.appendChild(inputBox)
    }



// let today = new Date()
// let dd = String(today.getDate()).padStart(2, '0')
// let mm = String(today.getMonth() + 1).padStart(2, '0')
// let yyyy = today.getFullYear()

// today = mm + '/' + dd + '/' + yyyy

// console.log(today)

