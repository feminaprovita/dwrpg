const towncounters = require('../seed/towncounters')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const randomizeEncounter = () => {
    return towncounters[getRandomInt(towncounters.length)]
}

console.log(randomizeEncounter())
// console.log(' ')
