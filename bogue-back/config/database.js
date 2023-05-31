const { default: mongoose } = require('mongoose')

const connection = () => {
  mongoose.connect(process.env.API_KEY)
  const db = mongoose.connection
  db.on('error', (err) => console.log(err))
  db.on('open', () => console.log('DATABASE : OK'))
}

module.exports = { connection }
