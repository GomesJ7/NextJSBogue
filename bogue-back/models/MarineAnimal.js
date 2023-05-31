const mongoose = require('mongoose')
require('../models/Location')

const marineAnimalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  latinName: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  minSize: {
    // size of animal in cm
    type: Number,
    required: true,
  },
  maxSize: {
    // size of animal in cm
    type: Number,
    required: true,
  },
  locations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'location',
    },
  ],
})

module.exports = mongoose.model('marineAnimal', marineAnimalSchema)
