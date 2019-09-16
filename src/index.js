const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
  dest: 'images'
})
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
//parses incoming requests in json format
app.use((e, req, res, next) => {
  res.status(500).send()
})

app.listen(port, () => {
  console.log("Server is up on port", port)
})

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
}

main()