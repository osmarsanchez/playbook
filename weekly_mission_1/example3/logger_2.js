/*
  When exporting a function/object like this:

  > module.exports.verbose

  It will export the content with the name `verbose`
*/

module.exports.verbose = message => {
  console.log(`verbose: ${message}`)
}
