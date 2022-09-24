const namesFirst = require('../seed/namesFirst')
const namesLast = require('../seed/namesLast')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const moreNames = []

function generateMoreNames (num) {
  for (let i = 0; i <= num; i++) {
    let hold =
      namesFirst[getRandomInt(namesFirst.length)] + ' ' +
      namesLast[getRandomInt(namesLast.length)]
    moreNames.push(hold)
  }
}

generateMoreNames(4)
console.log(moreNames)
