/*
  It also is a function declaration

  module.exports will allow to invoke this function in another script as:
  > const logger = require('./logger')

  and use it as:

  > logger("Heeey!")
*/

module.exports = message => {
  console.log(`info: ${message}`)
}
