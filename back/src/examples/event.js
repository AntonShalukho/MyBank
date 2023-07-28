const Emitter = require("events")

const emitter = new Emitter()

const eventCallback = (data, second, third) => {
  console.log('eventCallback: ', data, ' ', second, ' ', third)
}
const errorCallback = (error) => {
  console.log(error)
}

const MESSAGE = process.env.NODE_ENV
emitter.on('message', eventCallback)
emitter.on('error', errorCallback)

if(MESSAGE) {
  emitter.emit('message', MESSAGE,' message was sent', `this is message: ${MESSAGE}`)
} else {
  emitter.emit('message', 'sorry, message is empty')
}

const ERROR = process.env.ERROR || null

emitter.emit('error', 'RefError 12:34 "error"')

emitter.removeListener('message', eventCallback)

emitter.emit('message', 'sorry, message is empty')
