const http = require('http')
const path = require('path');
const fs = require('fs');

// console.log('path: ')
// console.log('path: ', __dirname)

// const server = http.createServer((req, res) => {
//   res.end()
// })

// const readStream = fs.createReadStream(path.resolve(__dirname, "text.txt"))

// const writeStream = fs.createWriteStream(path.resolve(__dirname, "text_4.txt"))

const text = fs.readFile(path.resolve(__dirname, 'text.txt'), (err, data) => {
  console.log('read file')
  console.log(data)
})
console.log(process)
// text.on('data', (data) => console.log(data))