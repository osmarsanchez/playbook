class repo {
  constructor(
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close
  ) {
    this.name = name
    this.author = author
    this.language = language
    this.numberOfCommits = numberOfCommits
    this.stars = stars
    this.forks = forks
    this.issues_open = issues_open
    this.issues_close = issues_close
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close
  }
  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`
  }
}

const myRepo = new repo(
  'LaunchX',
  'JesusAR1109',
  'JavaScript',
  '10',
  '100',
  '10',
  '10',
  '10'
)
console.log('Repo name: ' + myRepo.name)
console.log('Total issues: ' + myRepo.getTotalIssues())
console.log(myRepo.getGeneralInfo())

class issue {
  constructor(
    title,
    repositoryNameAssociated,
    author,
    status,
    numberOfComments,
    labels,
    dateCreated,
    lastUpdate
  ) {
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.author = author
    this.status = status
    this.numberOfComments = numberOfComments
    this.labels = labels
    this.dateCreated = dateCreated
    this.lastUpdate = lastUpdate
  }
  getTitleAuthor() {
    return `${this.title} - ${this.author}`
  }
  getGeneralInfo() {
    return `${this.title} - ${this.author} - ${this.status} - ${this.numberOfComments} - ${this.labels}`
  }
}

const myIssue = new issue(
  'Exercise 1',
  'LaunchX',
  'JesusAR1109',
  'open',
  '10',
  'bug',
  '2022-04-19',
  '2022-04-21'
)
console.log('Title: ' + myIssue.getTitleAuthor())
console.log('General information: ' + myIssue.getGeneralInfo())

class pullRequest {
  constructor(
    title,
    branchName,
    dateCreated,
    status,
    repositoryNameAssociated,
    author
  ) {
    this.title = title
    this.branchName = branchName
    this.dateCreated = dateCreated
    this.status = status
    this.repositoryNameAssociated = repositoryNameAssociated
    this.author = author
  }
  getStatus() {
    return `${this.status} - ${this.branchName}`
  }
  getTitleAndAuthor() {
    return `${this.title} - ${this.author}`
  }
}

const myPR = new pullRequest(
  'Exercise 1',
  'master',
  '2020-05-01',
  'open',
  'LaunchX',
  'JesusAR1109'
)
console.log('Status: ' + myPR.getStatus())
console.log('Title and author: ' + myPR.getTitleAndAuthor())

// Twitter
class user {
  constructor(user, username, bio, age) {
    this.user = user
    this.username = username
    this.bio = bio
    this.age = age
  }
  getUserInfo() {
    return `${this.user} - ${this.username} - ${this.bio} - ${this.age}`
  }
}

const myUser = new user('Jesus', 'JesusAR1109', '...', 21)
console.log(myUser.getUserInfo())

class trendingTopic {
  constructor(topic) {
    this.topic = topic
  }
  getTopic() {
    return `${this.topic}`
  }
}

const myTrendingTopic = new trendingTopic('#javascript')
console.log(myTrendingTopic.getTopic())

class hashtag {
  constructor(hashtag) {
    this.hashtag = hashtag
  }
  getHashtag() {
    return `${this.hashtag}`
  }
}

const myHashtag = new hashtag('#javascript')
console.log(myHashtag.getHashtag())

// Facebook
class userFacebook {
  constructor(user, username, bio, age) {
    this.user = user
    this.username = username
    this.bio = bio
    this.age = age
  }
  getUserInfo() {
    return `${this.user} - ${this.username} - ${this.bio} - ${this.age}`
  }
}

const myUserFacebook = new userFacebook('Jesus', 'JesusAR1109', '...', 21)
console.log(myUserFacebook.getUserInfo())

class Post {
  constructor(post) {
    this.post = post
  }
  getPost() {
    return `${this.post}`
  }
}

const myPost = new Post('#javascript')
console.log(myPost.getPost())

class Biography {
  constructor(biography) {
    this.biography = biography
  }
  getBiography() {
    return `${this.biography}`
  }
}

const myBiography = new Biography('...')
console.log(myBiography.getBiography())

// Uber
class profile {
  constructor(name, username, car, stars, trips, DateOfStart) {
    this.name = name
    this.username = username
    this.car = car
    this.stars = stars
    this.trips = trips
    this.DateOfStart = DateOfStart
  }
  getProfileInfo() {
    return `${this.name} - ${this.username} - ${this.car} - ${this.stars} - ${this.trips} - ${this.DateOfStart}`
  }
  getNameAndCar() {
    return `${this.name} - ${this.car}`
  }
}

const myProfile = new profile(
  'Jesus',
  'JesusAR1109',
  'BMW',
  '5',
  '10',
  '2022-04-21'
)
console.log(myProfile.getProfileInfo())
console.log(myProfile.getNameAndCar())

class travel {
  constructor(origin, destination, distance, date, duration) {
    this.origin = origin
    this.destination = destination
    this.distance = distance
    this.date = date
    this.duration = duration
  }
  getTravelInfo() {
    return `${this.origin} - ${this.destination} - ${this.distance} - ${this.date}`
  }
  getDurationAndDistance() {
    return `${this.duration} - ${this.distance}`
  }
}

const myTravel = new travel(
  'Cordoba',
  'Buenos Aires',
  '100km',
  '2022-04-19',
  '2h'
)
console.log(myTravel.getTravelInfo())
console.log(myTravel.getDurationAndDistance())
