const express = require('express')

const flock = express()

flock.get('/', (req, res) => {
  res.json({ message: "Homepage is running" })
})

flock.listen(1066, () => {
  console.log('Listening on port 1066')
})