const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  event: String,
  names: [{ type: Schema.Types.ObjectId, ref: "userModel", default: [] }],
  activities: Array
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)
