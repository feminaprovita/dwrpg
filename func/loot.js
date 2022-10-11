const loot = require('../seed/loot')
const gp = require('../seed/gp')
const potions = require('../seed/potions')
const market = require('../seed/market-black')
const arrows = require('../seed/arrows')
const drugs = require('../seed/drugs')
// const paladin = require('../seed/paladin')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this is a stupid way to add to the overall loot options, but it works, dammit
let pile = []
pile.push(loot)
pile.concat(potions)
pile.concat(market)
pile.concat(arrows)
pile.concat(drugs)
// pile.concat(paladin)
pile = pile[0]

// this will hold the loot stockpile we're about to generate
const pileOfLoot = []

const generatePileOfLoot = (num) => {
  let n = 0
  while (n < num) {
    pileOfLoot.push(loot[getRandomInt(loot.length)])
    n++
    }
	pileOfLoot.push(gp[getRandomInt(gp.length)])
}

generatePileOfLoot(3)
console.log(pileOfLoot)
