const repo = {
  name: 'LaunchX',
  author: 'carlogilmar',
  language: 'JavaScript',
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`
  },
}
console.log('Repo name:' + repo.name)
console.log('Total issues: ' + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
  title: 'Exercise 1',
  repositoryNameAssociated: 'LaunchX',
  status: 'open',
  numberOfComments: 10,
  labels: ['bug', 'enhancement'],
  author: 'JesusAR1109',
  dateCreated: '2022-04-18',
  lastUpdate: '2022-04-19',
  getTitleAndAuthor: function () {
    return `${this.title} - ${this.author}`
  },
  getGeneralInfo: function () {
    return `${this.title} - ${this.author} - ${this.status} - ${this.numberOfComments} - ${this.labels}`
  },
}
console.log('Title: ' + issue.getTitleAndAuthor())
console.log('General information: ' + issue.getGeneralInfo())

const pullRequest = {
  title: 'Exercise 1',
  branchName: 'master',
  dateCreated: '2022-04-19',
  status: 'open',
  repositoryNameAssociated: 'LaunchX',
  getStatus: function () {
    return `${this.status} - ${this.branchName}`
  },
  getTitleAndAuthor: function () {
    return `${this.title} - ${this.author}`
  },
}
console.log('Status: ' + pullRequest.getStatus())
console.log('Title and author: ' + pullRequest.getTitleAndAuthor())

// Twitter
const userTwitter = {
  user: 'Jesus',
  username: 'JesusAR1109',
  bio: '...',
  age: 21,
  getUserInfo: function () {
    return `${this.user} - ${this.username} - ${this.bio} - ${this.age}`
  },
}
console.log(userTwitter.getUserInfo())

const trendingTopic = {
  topic: '#javascript',
  getTopic: function () {
    return `${this.topic}`
  },
}
console.log(trendingTopic.getTopic())

const hashtag = {
  hashtag: '#javascript',
  getHashtag: function () {
    return `${this.hashtag}`
  },
}
console.log(hashtag.getHashtag())

// Facebook
const userFacebook = {
  user: 'Jesus',
  username: 'JesusAR11',
  bio: '...',
  age: 21,
  getUserInfo: function () {
    return `${this.user} - ${this.username} - ${this.bio} - ${this.age}`
  },
}
console.log(userFacebook.getUserInfo())

const post = {
  post: '#javascript',
  getPost: function () {
    return `${this.post}`
  },
}
console.log(post.getPost())

const biography = {
  biography: '...',
  getBiography: function () {
    return `${this.biography}`
  },
}
console.log(biography.getBiography())

// Uber
const profile = {
  name: 'Jesus',
  username: 'JesusAR',
  car: 'BMW',
  stars: 5,
  trips: 10,
  DateOfStart: '2022-04-19',
  getProfileInfo: function () {
    return `${this.name} - ${this.username} - ${this.car} - ${this.stars} - ${this.trips} - ${this.DateOfStart}`
  },
  getNameAndCar: function () {
    return `${this.name} - ${this.car}`
  },
}
console.log(profile.getProfileInfo())
console.log(profile.getNameAndCar())

const travel = {
  origin: 'Cordoba',
  destination: 'Buenos Aires',
  distance: '100km',
  date: '2022-04-19',
  duration: '2h',
  getTravelInfo: function () {
    return `${this.origin} - ${this.destination} - ${this.distance} - ${this.date}`
  },
  getDurationAndDistance: function () {
    return `${this.duration} - ${this.distance}`
  },
}
console.log(travel.getTravelInfo())
console.log(travel.getDurationAndDistance())
