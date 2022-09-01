const encounters = require('../seed/encounters')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const randomizeEncounter = () => {
    return encounters[getRandomInt(encounters.length)]
}

console.log(randomizeEncounter())
console.log(' ')
