const scam = require('../../seed/scams')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const scamOptions = []

const runScam = (num) => {
  let n = 0
  while (n < num) {
    scamOptions.push(scam[getRandomInt(scam.length)])
    n++
  }
}

runScam(6)
console.log(scamOptions)
