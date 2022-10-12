const tags = require('../../seed/weapon-tags')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const someMods = []

const modOptions = (num) => {
  let n = 0
  while (n < num) {
    someMods.push(tags[getRandomInt(tags.length)])
    n++
  }
}

modOptions(4)
console.log(someMods)
