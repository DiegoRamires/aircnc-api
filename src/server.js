const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const socketio = require('socket.io')
const http = require('http')

const routes = require('./routes')
require('dotenv').config()

const app = express()
const server = http.Server(app)
const io = socketio(server)

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(morgan('dev'))
app.use(routes)

const port = process.env.PORT || 3333
server.listen(port, () => {
  console.log(`The server is running on PORT ${port}`)
  console.log("Hit 'ctrl + c' to shut down")
})
