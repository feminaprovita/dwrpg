const { some } = require('../../seed/arrows')
const arrows = require('../../seed/arrows')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const theseArrows = []

const someArrows = (num) => {
  let n = 0
  while (n < num) {
    theseArrows.push(arrows[getRandomInt(arrows.length)])
    n++
  }
}

someArrows(4)
console.log(theseArrows)
