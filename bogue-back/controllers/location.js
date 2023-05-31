const Location = require('../models/Location')

exports.createLocation = (req, res) => {
  const location = new Location(req.body)
  location
    .save()
    .then(() => {
      return res.status(201).json(location)
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

exports.readAllLocations = async (req, res) => {
  try {
    const locations = await Location.find()
    if (!locations) {
      res.status(404).json({ message: 'locations not found' })
    } else {
      res.json(locations)
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.readLocationById = async (req, res) => {
  const { id } = req.params
  try {
    const location = await Location.findById(id)
    if (!location) {
      res.status(404).json({ message: 'location not found' })
    } else {
      res.json(location)
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.updateLocationById = async (req, res) => {
  const { id } = req.params
  const updates = {
    name: req.body.name,
  }
  try {
    const location = await Location.findByIdAndUpdate(id, updates, {
      returnDocument: 'after',
    })
    if (!location) {
      res.status(404).json({ message: 'location not found' })
    } else {
      res.json(location)
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

exports.deleteLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id)
    if (!location) {
      res.status(404).json({ message: 'location not found' })
    } else {
      location.delete()
      res.json({ message: 'location deleted' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.deleteAllLocations = async (req, res) => {
  try {
    await Location.deleteMany()
    res.json({ message: 'locations deleted' })
  } catch (err) {
    res.status(500).json(err)
  }
}
