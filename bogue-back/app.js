require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const database = require('./config/database')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const usersRouter = require('./routes/users')
const marineAnimalRouter = require('./routes/marineAnimal')
const marineAnimalsRouter = require('./routes/marineAnimals')
const locationRouter = require('./routes/location')
const locationsRouter = require('./routes/locations')
const searchRouter = require('./routes/search')

const app = express()
const bodyParser = require('body-parser')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/users', usersRouter)
app.use('/marineAnimal', marineAnimalRouter)
app.use('/marineAnimals', marineAnimalsRouter)
app.use('/location', locationRouter)
app.use('/locations', locationsRouter)
app.use('/search', searchRouter)

database.connection()

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// enable CORS using npm package
const cors = require('cors')
app.use(cors({ origin: '*' }))

module.exports = app
