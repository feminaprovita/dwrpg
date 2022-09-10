const potions = require('../seed/potions')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const fourPotions = []

const generateMorePotions = (num) => {
  let n = 0
  while (n < num) {
    fourPotions.push(potions[getRandomInt(potions.length)])
    n++
  }
}

generateMorePotions(4)
console.log(fourPotions)
