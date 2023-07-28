const http = require('http')
const fs = require("fs")
const fsPromise = require('fs/promises')
const FileSystemUtils = require('./utils/fsUtils.js')


// fs.readFile 
http.createServer(function (req, res) {
  fs.readFile(`${__dirname}/examples/fileSystemExample.html`, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// fs.appendFile
fs.appendFile(`${__dirname}/examples/createdFile.html`, htmlFile, function() {
  console.log('created')
})

// fs.writeFile
fs.writeFile(`${__dirname}/examples/fileSystemExample.html`, htmlFile, function(err) {
  if(err) console.log('error')
  console.log("wrote file")
})

//  fs.open
fs.open(`${__dirname}/examples/fileSystemExample.html`, 'r', function() {console.log('opened')})

// fs.unlink
fs.unlink(`${__dirname}/examples/wroteFile.txt`, function(err) {console.log("deleted")})

// fs.mkdir
fs.mkdir(path.resolve(__dirname, 'newFolder', 'newFolder2'), {recursive: true}, function(err) {
  if(err) {
    console.log(err)
    return 
  }
  console.log("folder has created")
}) 

// fs.rmdir
fs.rmdir(path.resolve(__dirname, "newFolder", "newFolder2"), function() {console.log("removed")})

// By Promise 
fsPromise.mkdir(path.resolve(__dirname, "CallbackHell"))
  .catch(() => console.log("Already exist"))
  .then(() => FileSystemUtils.writeFileAsync(path.resolve(__dirname, "CallbackHell", "xxxx.txt"), "Hello I am wrote file"))
  .then(() => FileSystemUtils.readFileAsync(path.resolve(__dirname, "CallbackHell", "xxxx.txt")))
  .then((data) => console.log(data))
  .then(() => FileSystemUtils.appendFileAsync(path.resolve(__dirname, "CallbackHell", "xxxx.txt"), ", And now I has appended"))
  .then(() => FileSystemUtils.readFileAsync(path.resolve(__dirname, "CallbackHell", "xxxx.txt")))
  .then((data) => console.log(data))
  .then(() => FileSystemUtils.writeFileAsync(path.resolve(__dirname, "CallbackHell", "xxxx2.txt"), "Hello I am wrote file2"))
  .then(() => FileSystemUtils.unlinkFileAsync(path.resolve(__dirname, "CallbackHell", "xxxx.txt")))
  .then(() => FileSystemUtils.rmFileAsync(path.resolve(__dirname, "CallbackHell", "xxxx2.txt")))
  .then(() => FileSystemUtils.rmdirAsync(path.resolve(__dirname, "CallbackHell")))
  .catch((err) => console.log(err))