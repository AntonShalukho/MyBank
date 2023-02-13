const fs = require('fs')

setTimeout(() => console.log('SetTimeout'), 0)
setImmediate(() => console.log('setImm'))
fs.readFile(__filename, () => {
  console.log("fs")
  setTimeout(() => console.log('SetTimeout in fs'), 0)
  setImmediate(() => console.log('setImm in fs'))
  Promise.resolve()
  .then(() => {
    console.log('resolve promise in fs')
  })
})
Promise.resolve()
.then(() => {
  console.log('resolve promise')
})