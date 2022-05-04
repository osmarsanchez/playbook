// Empty object
const myObject = {}
console.log('Example 1: Create an empty object')
console.log(myObject)

// Object with properties
const myObject2 = {
  name: 'Jesus',
  age: 21,
}
console.log('Example 2: Create an object with properties')
console.log(myObject2)

// Object with different properties
const myObject3 = {
  name: 'Jesus',
  age: 21,
  nicknames: ['JesusAR'],
}
console.log('Example 3: Create an object with different properties')
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3['nicknames'])

// Object with methods
const pet = {
  name: 'Rocket',
  sayHello() {
    console.log(`${this.name} says hello`)
  },
}
console.log('Example 4: Create an object with methods')
pet.sayHello()

// Object that receives parameters
const myPet = {
  name: 'Rocket',
  sayHelloToMyPet(yourPet) {
    console.log(`${this.name} says hello to ${yourPet}`)
  },
}
console.log('Example 5: Object that receives parameters')
myPet.sayHelloToMyPet('Dino')
