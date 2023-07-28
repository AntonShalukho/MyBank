const Router = require("./Router/index.js")
const Application = require('./Application/index.js')
const usersMap = require("./users.js")
const ParseJson = require('./ParseJson/index.js')

const router = new Router();
const app = new Application()
const PORT = process.PORT || 5000

app.use(ParseJson)

router.get('/users', (req, res) => {
  res.send(usersMap)
})

router.post('/users', (req, res) => {
  const user = req.body;
  usersMap.push(user)
  res.send(user)
})


app.addRouter(router)

app.listen(PORT, () => console.log(`Server has opened by ${PORT} PORT`))