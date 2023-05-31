const express = require('express')
const router = express.Router()
const marineAnimalCtrl = require('../controllers/marineAnimal')
const auth = require('../middlewares/auth')
const cors = require('cors')

router.use(cors())

router.get('/', marineAnimalCtrl.readAllMarineAnimals)
router.delete('/', auth.verifyToken, marineAnimalCtrl.deleteAllMarineAnimals)

module.exports = router
