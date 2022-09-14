const occasions = require('../seed/festival-occasions')
const natures = require('../seed/festival-natures')
const lengths = require('../seed/festival-lengths')
const values = require('../seed/festival-values')
// used once for propitious, again for taboo
const entities = require('../seed/festival-entities')


// simple randomizer
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

// this will hold the rite we're about to generate
const rite = {}

let natureOne
let natureTwo
let propitiousNum
let tabooNum

const twoNatures = () => {
  natureOne = getRandomInt(natures.length)
  let i = 0
  while (i <= natures.length) {
    natureTwo = getRandomInt(natures.length)
    if(natureOne !== natureTwo) break
    i++
  }
}

const bothValues = () => {
  propitiousNum = getRandomInt(values.length)
  let i = 0
  while (i <= values.length) {
    tabooNum = getRandomInt(values.length)
    if(propitiousNum !== tabooNum) break
    i++
  }
}

const generateRite = () => {
  rite.occasion = occasions[getRandomInt(occasions.length)]
  twoNatures()
  rite.nature = [natures[natureOne]]
  rite.nature.push(natures[natureTwo])
  rite.length = lengths[getRandomInt(lengths.length)]
  bothValues()
  rite.propitious = values[propitiousNum]
  rite.taboo = values[tabooNum]
  rite.entity = entities[getRandomInt(entities.length)]
}

generateRite()
console.log(rite)



// // realized i need two different outputs, went back to the dumb version
// let bothValues = []
// let bothNatures = []
// const both = (list, one, two, output) => {
//   console.log('length: ', list.length)
//   one = getRandomInt(list.length)
//   // console.log ('one: ', one)
//   let i = 0
//   while (i < list.length) {
//     two = getRandomInt(list.length)
//     // console.log('two: ', two)
//     // console.log('item two: ', list[two])
//     if (one !== two) break
//     i++
//   }
//   output.push(list[one])
//   output.push(list[two])
//   console.log('output: ', output)
//   return output
// }
// both(natures, natureOne, natureTwo, bothNatures)
// both(values, propitiousNum, tabooNum, bothValues)
