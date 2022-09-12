const backfires = require('../seed/revenge')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
let backfireSpell = ''

const spellBackfires = () => {
  backfireSpell = backfires[getRandomInt(backfires.length)]
}

spellBackfires()
console.log(backfireSpell)
