const knacks = require('../seed/knacks')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const moreKnacks = []

const generateMoreKnacks = () => {
    moreKnacks.push(knacks[getRandomInt(knacks.length)])
    moreKnacks.push(knacks[getRandomInt(knacks.length)])
    moreKnacks.push(knacks[getRandomInt(knacks.length)])
    moreKnacks.push(knacks[getRandomInt(knacks.length)])
}

generateMoreKnacks()
console.log(moreKnacks)
