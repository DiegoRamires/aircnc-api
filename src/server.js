const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`The server is running on PORT ${port}`)
  console.log("Hit 'ctrl + c' to shut down")
})
