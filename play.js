const seed = require('./seed')

// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// chooses a random letter (includes full alphabet -- see bottom of file)
const randomLetter = () => {
  const asciiLow = 65
  const asciiHigh = 90
  let randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow)
  return String.fromCharCode(randomAscii)
}

// selects and prints a random letter
let thisRound = randomLetter()
console.log(' ')
console.log(`~* ${thisRound} *~`)

// this will hold the indexes of the categories already used in this round
const game = []

// for each round, selects and prints a randomly selected category (numbered)
const playGame = num => {
  let rand
  for(let i = 1; i <= num; i++) {
    rand = getRandomInt(seed.length)
    if(!game.includes(i)) {
      console.log(`${i}. ${seed[rand]}`)
      game.push(i)
    } else rand = getRandomInt(seed.length)
  }
}

// a standard round of Scattergories has 12 categories
playGame(12)
console.log(' ')
// extra line at the top and bottom of each round for non-dev readability in console




/* *****************************************************************************
// to remove QUVXYZ, as in the original game, replace the formula in lines 7-12
// with the following (without the comment formatting)
const randomLetter = () => {
  const asciiLow = 65
  const asciiHigh = 87
  let randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow)
  const forbiddenLetters = [81, 85, 86]
  while(forbiddenLetters.includes(randomAscii)) {
    randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow)
  }
  return String.fromCharCode(randomAscii)
} */
