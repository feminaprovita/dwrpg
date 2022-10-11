const market = require('../../seed/market')
const paladin = require('../../seed/paladin')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this is a stupid way to add the paladin items to the overall market catalog, but it works, dammit
let inventory = []
inventory.push(market)
inventory.concat(paladin)
inventory = inventory[0]

const marketStop = []

const generateMorePotions = (num) => {
  let n = 0
  while (n < num) {
    marketStop.push(market[getRandomInt(market.length)])
    marketStop.push('***')
    n++
  }
}

generateMorePotions(4)
console.log(marketStop)
