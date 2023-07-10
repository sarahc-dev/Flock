const Event = require('../models/eventModel')
const mongoose = require('mongoose')

const EventController = {
  Index: async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'Id param is invalid'})
    }

    try {
      const event = await Event.findOne({_id: id})

      if (event === null) {
        return res.status(400).json({ message: "Id does not exist" })
      }
      
      res.status(200).json(event)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  Create: async (req, res) => {
    const { event, names, activities  } = req.body
  try {
    const newEvent = await Event.create({ event, names, activities })
    res.status(200).json(newEvent._id)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
  }
}

module.exports = EventController
