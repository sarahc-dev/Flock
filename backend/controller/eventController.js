const Event = require('../models/eventModel')

const EventController = {
  // Index: async (req, res) => {
  //   const { id } = req.params
  //   const event = await Event.findOne({_id: id})
  // }
  Create: async (req, res) => {
    const { names } = req.body
  try {
    const event = await Event.create({ names })
    res.status(200).json(event._id)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
  }
}
module.exports = EventController