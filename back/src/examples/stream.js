const fs = require('fs')
const {PassThrough, Duplex} = require('stream')

const readStream = fs.createReadStream('');
const writeStream = fs.createWriteStream('');

const pass = new PassThrough()

class Transform extends Duplex {
  constructor() {
    super()
  }
  _write(){}
  _read(){}
}
const transform = new Transform()

readStream.pipe(transform).pipe(pass).pipe(writeStream)