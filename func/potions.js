const potions = require('../seed/potions')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

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
