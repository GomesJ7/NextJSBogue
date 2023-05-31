/* eslint-disable no-console */
const MarineAnimal = require('../models/MarineAnimal')

exports.createMarineAnimal = (req, res) => {
  // Test minSize <= maxSize
  if (req.body.maxSize >= req.body.minSize) {
    const marineAnimal = new MarineAnimal(req.body)
    marineAnimal
      .save()
      .then(() => res.status(201).json({ message: 'marineAnimal created' }))
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
        res.status(500).json({ err })
      })
  } else {
    return res
      .status(500)
      .json({ message : "maxSize attribute must not exceed minSize." })
  }
}


exports.readAllMarineAnimals = (req, res) => {
  MarineAnimal.find()
    .populate('locations')
    .then((marineAnimals) => {
      res.json(marineAnimals)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}


exports.readMarineAnimalById = async (req, res) => {
  const { id } = req.params
  try {
    const marineAnimal = await MarineAnimal.findById(id)
    if (!marineAnimal) {
      res.status(404).json({ message: 'marineAnimal not found' })
    } else {
      marineAnimal.populate('locations')
      .then((marineaAnimal) => {
        res.json(marineaAnimal)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.updateMarineAnimalById = async (req, res) => {
  const { id } = req.params
  const updates = {
    name: req.body.name,
    latinName: req.body.latinName,
    class: req.body.class,
    minSize: req.body.minSize,
    maxSize: req.body.maxSize,
  }
  if (req.body.maxSize >= req.body.minSize) {
    try {
      const marineAnimal = await MarineAnimal.findByIdAndUpdate(id, updates, {
        returnDocument: 'after',
      })
      if (!marineAnimal) {
        res.status(404).json({ message: 'marineAnimal not found' })
      } else {
        res.json(marineAnimal)
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
  } else {
    return res
      .status(500)
      .json({ message : "maxSize attribute must not exceed minSize." })
  }
}

exports.deleteMarineAnimalById = async (req, res) => {
  try {
    const marineAnimal = await MarineAnimal.findById(req.params.id)
    if (!marineAnimal) {
      res.status(404).json({ message: 'marineAnimal not found' })
    } else {
      marineAnimal.delete()
      res.json({ message: 'marineAnimal deleted' })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.deleteAllMarineAnimals = async (req, res) => {
  try {
    await MarineAnimal.deleteMany()
    res.json({ message: 'marineAnimals deleted' })
  } catch (err) {
    res.status(500).json(err)
  }
}
