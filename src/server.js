const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`The server is running on PORT ${port}`)
  console.log("Hit 'ctrl + c' to shut down")
})
