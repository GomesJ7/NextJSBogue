const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRounds = 10

exports.register = async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: await bcrypt.hash(req.body.password, saltRounds),
    email: req.body.email,
    accessLevel: 0,
  })
  user
    .save()
    .then(() => {
      const token = jwt.sign(user.id, process.env.JWT_SECRET_KEY)
      return res.status(201).json({ user, token })
    })
    .catch((err) => {
      if (err.code === 11000) {
        const attribute = Object.keys(err.keyValue)[0]
        const value = err.keyValue[attribute]
        const message =
          'The ' +
          attribute +
          ' ' +
          value +
          ' is already used. The attribute ' +
          attribute +
          ' must be unique. '
        return res.status(500).json({ message })
      }
      return res.status(500).json({ err })
    })
}

exports.readAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    if (!users) {
      res.status(404).json({ message: 'users not found' })
    } else {
      res.json(users)
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.readUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    if (!user) {
      res.status(404).json({ message: 'user not found' })
    } else {
      res.json(user)
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password)
      if (cmp) {
        const token = jwt.sign(user.id, process.env.JWT_SECRET_KEY)
        return res.status(201).json({ user, token })
      } else {
        res.json({ message: 'Wrong username or password.' })
      }
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    res.status(500).send('Internal Server error Occured')
  }
}

exports.updateUserById = async (req, res) => {
  const { id } = req.params
  const updates = {
    username: req.body.username,
    password: req.body.password ? await bcrypt.hash(req.body.password, saltRounds) : req.body.password,
    accessLevel: req.body.accessLevel,
    email: req.body.email,
  }
  try {
    const user = await User.findByIdAndUpdate(id, updates, {
      returnDocument: 'after',
    })
    if (!user) {
      res.status(404).json({ message: 'user not found' })
    } else {
      res.json(user)
    }
  } catch (err) {
    if (err.code === 11000) {
      const attribute = Object.keys(err.keyValue)[0]
      const value = err.keyValue[attribute]
      const message =
        'The ' +
        attribute +
        ' ' +
        value +
        ' is already used. The attribute ' +
        attribute +
        ' must be unique. '
      return res.status(500).json({ message })
    }
    res.status(500).json({ err })
  }
}

exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      res.status(404).json({ message: 'user not found' })
    } else {
      user.delete()
      res.json({ message: 'user deleted' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany()
    res.json({ message: 'users deleted' })
  } catch (err) {
    res.status(500).json(err)
  }
}
