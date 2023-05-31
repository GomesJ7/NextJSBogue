const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/location')
const auth = require('../middlewares/auth')
const cors = require('cors')

router.use(cors())

router.get('/:id', userCtrl.readLocationById)

router.post('/', userCtrl.createLocation)

router.patch('/:id', auth.verifyToken, userCtrl.updateLocationById)

router.delete('/:id', auth.verifyToken, userCtrl.deleteLocationById)

module.exports = router
