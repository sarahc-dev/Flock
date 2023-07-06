const express = require('express')
const Event = require('../models/eventModel')

const router = express.Router()

router.post('/', async (req, res) => {
  const { name } = req.body
  try {
    const event = await Event.create({ name })
    res.status(200).json(event)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
