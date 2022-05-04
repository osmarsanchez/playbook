const Logger = require('./logger') // Invoke the class in the module

// Object creation
const dbLogger = new Logger('DB')
// Method invocation
dbLogger.info('This is an informational message')

// Object creation
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')
