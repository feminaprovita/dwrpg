const encounters = require('../seed/encounters')
const towncounters = require('../seed/towncounters')
const taverncounters = require('../seed/taverncounters')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const randomizeEncounter = () => {
    // return encounters[getRandomInt(encounters.length)]
    // return towncounters[getRandomInt(towncounters.length)]
    return taverncounters[getRandomInt(taverncounters.length)]
}

console.log(' ')
console.log(randomizeEncounter())
