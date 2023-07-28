const http = require('http')
const fs = require("fs")
const path = require('path')

class FileSystemUtils {
  static writeFileAsync = async (path, date) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, date, function(err) {
        if (err) return reject(err)
        console.log("writeFile")
        resolve()
      })
    })
  }

  static appendFileAsync = async (path, date) => {
    return new Promise((resolve, reject) => {
      fs.appendFile(path, date, function(err) {
        if (err) return reject(err)
        console.log("appendFileAsync")
        resolve()
      })
    })
  }
  
  static readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) return reject(err)
        console.log("readFileAsync")
        resolve(data)
      })
    })
  }
  
  static mkdirAsync = async (path, dir) => {
    return new Promise((resolve, reject) => {
      fs.mkdir(path, dir, (err) => {
        if (err) return reject(err)
        console.log("mkdirAsync")
        resolve()
      })
    })
  }
  
  static rmdirAsync = async (path) => {
    return new Promise((resolve, reject) => {
      fs.rmdir(path, (err) => {
        if (err) return reject(err)
        console.log("rmdir")
        resolve()
      })
    })
  }

  static unlinkFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
      fs.unlink(path, (err) => {
        if (err) return reject(err)
        console.log("unlinkFileAsync")
        resolve()
      })
    })
  }

  static rmFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
      fs.rm(path, (err) => {
        if (err) return reject(err)
        console.log("rmFileAsync")
        resolve()
      })
    })
  }
  
}

module.exports = FileSystemUtils
