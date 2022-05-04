// for Each
const numbers = [1, 2, 3, 4, 5]
console.log('Example 1: Printing numbers in array')
numbers.forEach(num => console.log(num))

// for Each
let sum = 0
const numbers2 = [1, 2, 3, 4, 5]
numbers2.forEach(num => (sum += num))
console.log('Example 2: Printing sum of numbers in array')
console.log(sum)

// forEach
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log('Example 3: Printing countries in array in upper case')
countries.forEach(element => console.log(element.toUpperCase()))

// map
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(num => num * num)
console.log('Example 4: Printing numbers in array squared')
console.log(numbersSquare)

// map
const names = ['Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map(name => name.toUpperCase())
console.log('Example 5: Printing names in array in upper case')
console.log(namesToUpperCase)

// map
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map(country =>
  country.toUpperCase().slice(0, 3)
)
console.log(
  'Example 6: Printing the first three letters of countries in array in upper case'
)
console.log(countriesFirstThreeLetters)

// filter
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter(country =>
  country.includes('land')
)
console.log('Example 7: Printing countries in array containing land')
console.log(countriesContainingLand)
const countriesEndsBy = countries.filter(country => country.endsWith('ia'))
console.log('Example 8: Printing countries in array ending with ia')
console.log(countriesEndsBy)

// filter
const scores = [
  { name: 'A', score: 95 },
  { name: 'L', score: 98 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]
const scoresGreaterEighty = scores.filter(score => score.score > 80)
console.log('Example 9: Printing scores greater than 80')
console.log(scoresGreaterEighty)

// reduce
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log(
  'Example 10: Printing sum of numbers in array using reduce function'
)
console.log(result_of_reduce)

// every
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every(name => typeof name === 'string')
console.log('Example 10: All names are strings: ' + areAllStr)

// find
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find(age => age < 20)
console.log('Example 11: First age less than 20 is: ' + age)

// find
const scores12 = [
  { name: 'A', score: 95 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]
const score_less_than_80 = scores12.find(user => user.score > 80)
console.log('Example 12: Score found: ' + score_less_than_80.score)

// findIndex
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex(name => name.length > 7)
console.log(
  'Example 13: First element with more than 7 characters is: ' + result
)

// some
const booleans = [true, true, false, true]
const areSomeTrue = booleans.some(b => b === false)
console.log('Example 14: Some of booleans is false: ' + areSomeTrue)

// sort
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log('Example 15: Sorted elements using sort')
console.log(products.sort())

// sort
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]
users.sort((a, b) => {
  return a.age - b.age
})
console.log('Example 16: Sorted elements using sort by age')
console.log(users)
