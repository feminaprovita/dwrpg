const loot = require('../seed/loot')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const pileOfLoot = []

const generatePileOfLoot = () => {
    pileOfLoot.push(loot[getRandomInt(loot.length)])
    pileOfLoot.push(loot[getRandomInt(loot.length)])
    pileOfLoot.push(loot[getRandomInt(loot.length)])
    pileOfLoot.push(loot[getRandomInt(loot.length)])
}

generatePileOfLoot()
console.log(pileOfLoot)
