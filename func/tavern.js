const boasts = require('../seed/tavern-boasts')
const drinks = require('../seed/tavern-drinks')
const foods = require('../seed/tavern-foods')
const names = require('../seed/tavern-names')
const owners = require('../seed/tavern-owners')
const enc = require('../seed/taverncounters')
const stories = require('../seed/tavern-stories')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the npc we're about to generate
const tavern = {}

const generateTavern = () => {
    // tavern.name = names[getRandomInt(names.length)]
    // tavern.owner = owners[getRandomInt(owners.length)]\
    console.log('https://www.dndspeak.com/tavern-generator/')
    console.log('https://donjon.bin.sh/fantasy/inn/')
    console.log('https://www.dndspeak.com/carousing-generator/)')
    tavern.drink = drinks[getRandomInt(drinks.length)]
    tavern.food = foods[getRandomInt(foods.length)]
    tavern.boast = boasts[getRandomInt(boasts.length)]
    tavern.encounter = enc[getRandomInt(enc.length)]
    tavern.story = stories[getRandomInt(stories.length)]
}

generateTavern()
console.log(tavern)
