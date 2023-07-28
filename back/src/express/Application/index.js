const EventEmitter = require('events')
const http = require('http')

module.exports = class Application {
  constructor() {
    this.emitter = new EventEmitter()
    this.server = this._createServer()
    this.middleware = []
  }

  use(middleware) {
    this.middleware.push(middleware)
  }

  listen(port, callback) {
    this.server.listen(port, callback)
  }  

  addRouter(router) {
    Object.keys(router.endpoint).forEach(path => {
      const urlData = router.endpoint[path]
      Object.keys(urlData).forEach(method => {
        this.emitter.on(this._getRouterMask(path, method), (req, res) => {
          const handler = urlData[method];
          this.middleware.forEach(middleware => middleware(req, res))
          handler(req, res)
        })
      })
    })
  }

  _createServer() {
    return http.createServer((req, res) => {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on("end", () => {
        if(body) {
          req.body = JSON.parse(body)
        }
        const emitted = this.emitter.emit(this._getRouterMask(req.url, req.method), req, res)
        if(!emitted) {
          res.end(`Request with url: ${req.url} doesn't exist`)
        }
      })
    })
  }

  _getRouterMask(url, method) {
    return `[${url}]:[${method}]`
  }
}