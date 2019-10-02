const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'hello dev' })
})

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`The server is running on PORT ${port}`)
  console.log("Hit 'ctrl + c' to shut down")
})
