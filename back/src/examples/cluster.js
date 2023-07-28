const cluster = require('cluster')
const os = require("os")

// if(cluster.isMaster) {
//   // for(let i = 0; i < os.cpus().length - 1; i++) {
//     cluster.fork()
//       .on('disconnect', () => {
//         console.log(`work ${process.pid} disconnected`)
//       })
//       .on('exit', (code, signal) => {
//         console.log("code: ", code, "signal: ", signal)
//       })
//       .on('listening', (address) => {console.log("address: ", address)})
//   // }
// } else {
//   console.log(`work ${process.pid} is in the process`)

//   // setInterval(() => console.log(`process ${process.pid} stell work`), 4000)
// }

// console.dir(cluster.Worker)

// cluster.fork()
// console.log(process.pid)

if(cluster.isPrimary) {
  const worker = cluster.fork()
  console.log("worker.id: ", worker.id)
  console.log("worker.process: ", worker.process)
  console.log("worker.isConnected: ", worker.isConnected())
  worker.on('disconnect', () => console.log(`work ${process.pid} disconnected`))
  console.log(`work ${process.pid} is in the process`)
  setTimeout(() => worker.kill('SIGTERM'), 4000)
  console.log("worker.exitedAfterDisconnect 1: ", worker.exitedAfterDisconnect)
  setTimeout(() => console.log("worker.exitedAfterDisconnect 2: ", worker.exitedAfterDisconnect), 4500)
  setTimeout(() => console.log("worker.isConnected: ", worker.isConnected()), 5000)
}