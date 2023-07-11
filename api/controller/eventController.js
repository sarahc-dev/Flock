const Event = require('../models/eventModel')
const mongoose = require('mongoose')
// const OpenAiClient = require('../clients/openAiClient')
const SerpApiClient = require('../clients/serpApiClient')

const EventController = {
  Index: async (req, res) => {
    const { id } = req.params
    // console.log(id)
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
    const { eventName, names, location  } = req.body
    const client = new SerpApiClient(location)
    const clientAi = new OpenAiClient(location)
    let firstctivities = []

    await client.activitySearch(async (data) => {
      activities = data.map(activity => activity.title)
      
      // await clientAi.activitySearch(async (data) => {
      //   activities.push(data)
      
        try {
          const newEvent = await Event.create({ eventName, names, activities })
          res.status(200).json(newEvent._id)
        } catch (error) {
          res.status(400).json({ error: error.message })
        }
      // })
    })

  }
}
module.exports = EventController