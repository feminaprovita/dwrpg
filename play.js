const seed = require('./seed')

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const randomLetter = () => {
  const asciiLow = 65
  const asciiHigh = 90
  let randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow)

// comment in the lines immediately below to remove QUVXYZ, as in the original game
  /* const forbiddenLetters = [81, 85, 86, 88, 89, 90]
  while(forbiddenLetters.includes(randomAscii)) {
    randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow)
  } */
  return String.fromCharCode(randomAscii)
}

// selects and prints a random letter
let thisRound = randomLetter()
console.log(' ')
console.log(`~* ${thisRound} *~`)

// for each, selects and prints a randomly selected category (numbered)
const playGame = num => {
  let rand
  for(let i = 1; i <= num; i++) {
    rand = getRandomInt(seed.length)
    console.log(`${i}. ${seed[rand]}`)
  }
}

// a standard game of Scattergories has 12 categories
playGame(12)
console.log(' ')
// extra line at the top and bottom of each round for non-dev readability in console
