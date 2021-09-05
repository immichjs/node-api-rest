const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./app/controllers')(app)

const PORT = 3000

app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(PORT)
