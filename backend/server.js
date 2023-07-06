require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const flock = express()

flock.get('/', (req, res) => {
  res.json({ message: "Homepage is running" })
})


mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {
    flock.listen(process.env.PORT_NO, () => {
        console.log('Listening on port', process.env.PORT_NO)
      })
  })
  .catch((error) => {
    console.log(error)
  })
