const explorers = [
  {
    name: 'Explorer 1',
    exercises_completed: 10,
    rate: 99,
    city: 'CDMX',
    stack: ['js', 'c#'],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: 'Explorer 2',
    exercises_completed: 9,
    city: 'Veracruz',
    rate: 50,
    stack: ['js'],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: 'Explorer 3',
    exercises_completed: 3,
    city: 'Sonora',
    rate: 100,
    stack: ['elixir'],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
]

explorers.forEach(explorer => {
  console.log(explorer.name)
})

explorers.forEach(explorer => {
  console.log(explorer.stack)
})

const newList = explorers.map(explorer => {
  return explorer.stack
})
console.log(newList)

const jsExplorers = explorers.filter(explorer => {
  return explorer.stack.includes('js')
})
console.log(jsExplorers)

const firstExplorer = explorers.find(explorer => {
  return explorer.city === 'CDMX'
})
console.log(firstExplorer)

const sum = explorers.reduce((acc, explorer) => {
  return acc + explorer.exercises_completed
}, 0)
console.log(sum)

const some = explorers.some(explorer => {
  return explorer.missions.frontend.exercisesFinished
})
console.log(some)

const every = explorers.every(explorer => {
  return explorer.missions.onboarding.isFinished
})
console.log(every)
