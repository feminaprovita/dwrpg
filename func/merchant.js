const merchants = require('../seed/merchants')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const thisMerchant = []

const generateMerchant = () => {
    thisMerchant.push(merchants[getRandomInt(merchants.length)])
}

generateMerchant()
console.log(thisMerchant)
