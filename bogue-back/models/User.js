const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessLevel: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: true,
  },
  // Bonus Avatar
})

module.exports = mongoose.model('user', userSchema)
