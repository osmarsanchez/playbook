// Empty class
class Person {}
console.log('Example 1: Create an empty class')
console.log(Person)

// Instance of class
class Pet {}
const myPet1 = new Pet()
console.log('Example 2: Create an instance of class')
console.log(myPet1)

// Class with properties
class Student {
  constructor(name, age, subjects) {
    this.name = name
    this.age = age
    this.subjects = subjects
  }
}

// Instance of class
const jesusStudent = new Student('Jesus', 21, ['NodeJS', 'Python'])
console.log('Example 3: Create an instance of class with properties')
console.log(jesusStudent)

// Methods of class
class Repository {
  constructor(name, author, language, stars) {
    this.name = name
    this.author = author
    this.language = language
    this.stars = stars
  }

  getInfo() {
    return `Repository ${this.name} has ${this.stars} stars`
  }
}
console.log('Example 4: Create a class with methods')
const myRepo = new Repository('LaunchX', 'JesusAR1109', 'js', 100)
console.log(myRepo.getInfo())

// Default values for properties
class PullRequest {
  constructor(repo, title, lines_changed) {
    this.repo = repo
    this.title = title
    this.lines_changed = lines_changed
    this.status = 'OPEN'
    this.dateCreated = new Date()
  }

  getInfo() {
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  }
}
console.log('Example 5: Create a class with default properties')
const myPR1 = new PullRequest('LaunchX', 'Mi Primer PR', 100)
console.log(myPR1.getInfo())
const myPR2 = new PullRequest('LaunchX', 'Mi segundo PR', 99)
console.log(myPR2.getInfo())

// Getters
class SpacePet {
  constructor(name, age, stack) {
    this.name = name
    this.age = age
    this.stack = stack
    this.exercises_completed = 0
    this.exercises_todo = 99
  }

  get getExercisesCompleted() {
    return this.exercises_completed
  }
}
console.log('Example 6: Getters')
const rocket = new SpacePet('Rocket', 1, [])
console.log(rocket.getExercisesCompleted)

// Setters
class MissionCommander {
  constructor(name, mission) {
    this.name = name
    this.mission = mission
    this.students = 0
    this.lives = 0
  }

  get getStudents() {
    return this.students
  }

  get getLives() {
    return this.lives
  }

  set setStudents(students) {
    this.students = students
  }

  set setLives(lives) {
    this.lives = lives
  }
}
console.log('Example 7: Setters')
const missionCommanderNode = new MissionCommander('Carlo', 'NodeJS')
console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3
console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)

// Static methods
class Toolbox {
  static getMostUsefulTools() {
    return ['Command line', 'git', 'Text Editor']
  }
}
console.log('Example 8: Static methods')
console.log(Toolbox.getMostUsefulTools())

// Inheritance
class Developer {
  constructor(name, mainLang, stack) {
    this.name = name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
    return this.name
  }
}
console.log('Example 9: Inheritance')
const jesusDev = new Developer('Jesus', 'js', ['express', 'react', 'node'])
console.log(jesusDev)

class LaunchXStudent extends Developer {}
const jesusLaunchXDev = new LaunchXStudent('Jesus', 'js', [
  'express',
  'react',
  'node',
])
console.log(jesusLaunchXDev)
console.log(jesusLaunchXDev.getName)

// Overwriting methods
class Explorer {
  constructor(name, username, mission) {
    this.name = name
    this.username = username
    this.mission = mission
  }

  getNameAndUsername() {
    return `Explorer ${this.name}, username: ${this.username}`
  }
}

class Traveler extends Explorer {
  constructor(name, username, mission, cycle) {
    super(name, username, mission)
    this.cycle = cycle
  }

  getGeneralInfo() {
    let nameAndUsername = this.getNameAndUsername()
    return `${nameAndUsername}, Cycle ${this.cycle}`
  }
}

const traveler1 = new Traveler('Jesus', 'LaunchX', 'Node JS', 'April 2022')
console.log('Example 10: Overwriting methods')
console.log(traveler1)
console.log(traveler1.getNameAndUsername())
console.log(traveler1.getGeneralInfo())
