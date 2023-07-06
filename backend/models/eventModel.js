const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  names: Array,
  activities: ["go for a walk", "eat pizza", "dance party", "have a conversation", "base jumping"]
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)
