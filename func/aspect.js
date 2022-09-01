const aspects = require('../seed/aspects')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const moreAspects = []

const generateMoreAspects = () => {
    moreAspects.push(aspects[getRandomInt(aspects.length)])
    moreAspects.push(aspects[getRandomInt(aspects.length)])
    moreAspects.push(aspects[getRandomInt(aspects.length)])
    moreAspects.push(aspects[getRandomInt(aspects.length)])
}

generateMoreAspects()
console.log(moreAspects)
