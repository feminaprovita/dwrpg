const market = require('../../seed/market-black')
const potions = require('../../seed/potions')
const drugs = require('../../seed/drugs')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this is a stupid way to add the potions to the overall market catalog, but it works, dammit
let inventory = []
inventory.push(market)
inventory.concat(potions)
inventory.concat(drugs)
inventory = inventory[0]

const marketStop = []

const generateMorePotions = (num) => {
  let n = 0
  while (n < num) {
    marketStop.push(inventory[getRandomInt(inventory.length)])
    marketStop.push('***')
    n++
  }
}

generateMorePotions(4)
console.log(marketStop)
