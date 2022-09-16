// DOESN'T WORK, IDK HOW TO DO THIS




// const knacks = require('../seed/npc-knacks')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const another = []

const generateAnother = (file) => {
    another.push(file[getRandomInt(file.length)])
    another.push(file[getRandomInt(file.length)])
    another.push(file[getRandomInt(file.length)])
    another.push(file[getRandomInt(file.length)])
}

generateAnother()
console.log(another)
