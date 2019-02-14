const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

planets.forEach(planet=>{
    // console.log(planet)

    // document.querySelector("#planets").innerHTML+=`<p>${planet}</p>`
})


/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const properArray = planets.map(currentPlanet=>{let firstLetter = currentPlanet.charAt(0).toUpperCase()
    let restOfString = currentPlanet.slice(1)
    let properPlanet = firstLetter+restOfString
    return properPlanet
    // console.log(properPlanet)
})

    // console.log(properArray)



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetE = planets.filter(planet => planet.includes("e")

)
// console.log(planetE)