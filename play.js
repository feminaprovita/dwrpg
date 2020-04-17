const seed = require('./seed')

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const randomLetter = () => {
  const asciiLow = 65;
  const asciiHigh = 90
  let randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow);
  return String.fromCharCode(randomAscii)
}

// selects and prints a random letter
let thisRound = randomLetter()
console.log(' ')
console.log(`~* ${thisRound} *~`)

// for each, selects and prints a randomly selected category (numbered)
let rand = getRandomInt(seed.length)
console.log('1. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('2. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('3. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('4. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('5. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('6. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('7. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('8. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('9. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('10. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('11. ', seed[rand])

rand = getRandomInt(seed.length)
console.log('12. ', seed[rand])
console.log(' ')
// extra line at the top and bottom of each round for non-dev readability in console
