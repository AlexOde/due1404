// //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// document.querySelector('button').addEventListener('click', getDrink)

// function getDrink() {
//     let drink = [document.querySelector('input').value]

//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//     console.log(data.drinks)
//     document.querySelector('h2').innerText = [data.drinks[0].strDrink]
//     document.querySelector('img').src = [data.drinks[0].strDrinkThumb]
//     document.querySelector('h3').innerText = [data.drinks[0].strInstructions]
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }

//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('#random').addEventListener('click', getRandomBeer)

function getRandomBeer() {

    fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)


        document.querySelector('h2').innerText = data[0].name
        document.querySelector('img').src = data[0].image_url
        document.querySelector('h4').innerText = data[0].description
        document.querySelector('h3').innerText = data[0].brewers_tips
    
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('#search').addEventListener('click', searchBeer)

function searchBeer() {
    let drink = [document.querySelector('input')]

    const url = "https://api.punkapi.com/v2/beers/"
    const beerName = drink.value
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)


        document.querySelector('h2').innerText = data[0].name
        // document.querySelector('img').src = [data.drinks[0].strDrinkThumb]
        document.querySelector('h4').innerText = data[0].description
        document.querySelector('h3').innerText = data[0].brewers_tips
    
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}