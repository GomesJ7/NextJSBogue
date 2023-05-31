/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()
const searchCtrl = require('../controllers/search')
const auth = require('../middlewares/auth')
const cors = require('cors')

router.use(cors())

router.get('/name/:name', searchCtrl.searchMarineAnimalByName)
router.get('/latinname/:latinName', auth.verifyToken, searchCtrl.searchMarineAnimalByLatinName)
router.get('/class/:class', auth.verifyToken, searchCtrl.searchMarineAnimalByClass)
// Cherchent un animal dont la minSize maxSize = la valeur entrée (devraient chercher avec < et > à la place ?)
// à revoir (erreurs cast type)
/* router.get('/minsize/:minSize', auth.verifyToken, searchCtrl.searchMarineAnimalByMinSize)
router.get('/maxsize/:maxSize', auth.verifyToken, searchCtrl.searchMarineAnimalByMaxSize) */
router.get('/:key', searchCtrl.searchMarineAnimalByAnything)

module.exports = router
