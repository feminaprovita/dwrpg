const instincts = require('../seed/instincts')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const moreInstincts = []

const generateMoreInstincts = () => {
    moreInstincts.push(instincts[getRandomInt(instincts.length)])
    moreInstincts.push(instincts[getRandomInt(instincts.length)])
    moreInstincts.push(instincts[getRandomInt(instincts.length)])
    moreInstincts.push(instincts[getRandomInt(instincts.length)])
}

generateMoreInstincts()
console.log(moreInstincts)
