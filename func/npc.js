const namesFirst = require('../seed/namesFirst')
const namesLast = require('../seed/namesLast')
const instincts = require('../seed/npc-instincts')
const knacks = require('../seed/npc-knacks')
const species = require('../seed/npc-species')
const trait = require('../seed/npc-traits')
const aspects = require('../seed/npc-aspects')
const voices = require('../seed/npc-voices')
const questions = require('../seed/questions')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const npc = {}

const generateNpc = () => {
    npc.name =
        namesFirst[getRandomInt(namesFirst.length)] + ' ' +
        namesLast[getRandomInt(namesLast.length)]
    npc.species = species[getRandomInt(species.length)]
    npc.trait = trait[getRandomInt(trait.length)]
    npc.instinct = instincts[getRandomInt(instincts.length)]
    npc.knack = knacks[getRandomInt(knacks.length)]
    npc.aspect = aspects[getRandomInt(aspects.length)]
    npc.voice = voices[getRandomInt(voices.length)]
    npc.question = questions[getRandomInt(questions.length)]
}

generateNpc()
console.log(npc)
