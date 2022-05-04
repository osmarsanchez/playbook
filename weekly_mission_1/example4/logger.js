class Logger {
  constructor(name) {
    // this: current instance of the class (context)
    this.name = name // attribute
  }

  // methods
  info(message) {
    console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
  }

  verbose(message) {
    console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
  }
}

// exporting a class in a module
module.exports = Logger
