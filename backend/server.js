require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const flock = express()

const eventRoutes =  require('./routes/eventRouter')

flock.use(express.json())

flock.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

flock.use('/event', eventRoutes)

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {
    flock.listen(process.env.PORT_NO, () => {
        console.log('Listening on port', process.env.PORT_NO)
      })
  })
  .catch((error) => {
    console.log(error)
  })
