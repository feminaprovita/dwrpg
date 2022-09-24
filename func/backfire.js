const backfires = require('../seed/revenge')
const potions = require('../seed/potions')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))


// this is a stupid way to add the potions to the overall market catalog, but it works, dammit
let spells = []
spells.push(backfires)
spells.concat(potions)
spells = spells[0]

// this will hold the spell we're about to generate
let backfireSpell = ''

const spellBackfires = () => {
  backfireSpell = backfires[getRandomInt(backfires.length)]
}

spellBackfires()
console.log(backfireSpell)
