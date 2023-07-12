const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  eventName: String,
  names: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  activities: Array
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)
