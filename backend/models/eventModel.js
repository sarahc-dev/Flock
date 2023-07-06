const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  name: String
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)
