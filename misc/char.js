const questions = require('../seed/questions')

/* THIS REPURPOSES THE RANDOMIZER FROM SCATTERGORIES TO ASK LOADED QUESTIONS
OF MY RPG PLAYERS TO HELP THEM DEVELOP THEIR CHARACTERS */

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the indexes of the questions already used in this round
const char = []

// for each round, selects and prints a randomly selected question (numbered)
const interrogateCharacter = num => {
  let rand
  for(let i = 0; i <= num; i++) {
    rand = getRandomInt(questions.length)
    if(!char.includes(i)) {
      console.log(`${i}. ${questions[rand]}`)
      char.push(i)
    } else rand = getRandomInt(questions.length)
  }
}

// a standard round of Scattergories has 12 categories
interrogateCharacter(10)
console.log(' ')
// extra line at the top and bottom of each round for non-dev readability in console
