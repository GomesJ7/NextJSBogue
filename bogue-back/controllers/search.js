/* eslint-disable no-console */
const MarineAnimal = require('../models/MarineAnimal')

// Actuellement, les fonctions de recherches sont case sensitive !

exports.searchMarineAnimalByName = (req, res) => {
  MarineAnimal.find({
    $or: [
      {
        name: { $regex: req.params.name },
      },
    ],
  }).populate('locations')
    .then((marineAnimals) => {
      res.json(marineAnimals)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  // eslint-disable-next-line no-console
  console.log(req.params.name)
}

exports.searchMarineAnimalByLatinName = (req, res) => {
  MarineAnimal.find({
    $or: [
      {
        latinName: { $regex: req.params.latinName },
      },
    ],
  }).populate('locations')
    .then((marineAnimals) => {
      res.json(marineAnimals)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  // eslint-disable-next-line no-console
  console.log(req.params.Latinname)
}

exports.searchMarineAnimalByClass = (req, res) => {
  MarineAnimal.find({
    $or: [
      {
        class: { $regex: req.params.class },
      },
    ],
  }).populate('locations')
    .then((marineAnimals) => {
      res.json(marineAnimals)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  // eslint-disable-next-line no-console
  console.log(req.params.class)
}

// à revoir (erreurs cast type)
exports.searchMarineAnimalByMinSize = (req, res) => {
  MarineAnimal.find({
    $or: [
      {
        minSize: { $regex: req.params.minSize },
      },
    ],
  }).populate('locations')
    .then((marineAnimals) => {
      res.json(marineAnimals)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  // eslint-disable-next-line no-console
  console.log(req.params.minSize)
}

// à revoir (erreurs cast type)
exports.searchMarineAnimalByMaxSize = (req, res) => {
  // eslint-disable-next-line no-unused-expressions
  // console.log(typeof(Number(req.params.maxSize)))
  MarineAnimal.find({
    $or: [
      {
        maxSize: { $regex: Number(req.params.maxSize) },
      },
    ],
  }).populate('locations')
    .then((marineAnimals) => {
      res.json(marineAnimals)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  // eslint-disable-next-line no-console
  console.log(req.params.MaxSize)
}

exports.searchMarineAnimalByAnything = (req, res) => {
  MarineAnimal.find({
    $or: [
      { name: { $regex: req.params.key } },
      { latinName: { $regex: req.params.key } },
      { class: { $regex: req.params.key } },
      // rajouter minSize, maxSize et locations
    ],
  }).populate('locations')
    .then((marineAnimals) => {
      res.json(marineAnimals)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
  // eslint-disable-next-line no-console
  console.log(req.params.key)

}
