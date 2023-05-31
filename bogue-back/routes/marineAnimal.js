const express = require('express')
const router = express.Router()
const marineAnimalCtrl = require('../controllers/marineAnimal')
const auth = require('../middlewares/auth')
const cors = require('cors')

router.use(cors())

router.get('/:id', marineAnimalCtrl.readMarineAnimalById)

router.post('/', marineAnimalCtrl.createMarineAnimal)

router.patch('/:id', auth.verifyToken, marineAnimalCtrl.updateMarineAnimalById)

router.delete('/:id', marineAnimalCtrl.deleteMarineAnimalById)

module.exports = router
