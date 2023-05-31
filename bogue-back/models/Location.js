const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  // WIP coordinates
})

module.exports = mongoose.model('location', locationSchema)
