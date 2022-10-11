const drugs = require('../../seed/drugs')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const randomizeDrug = () => {
    return drugs[getRandomInt(drugs.length)]
}

console.log(randomizeDrug())
console.log(' ')
