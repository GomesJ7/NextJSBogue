const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/location')
const auth = require('../middlewares/auth')
const cors = require('cors')

router.use(cors())

router.get('/', userCtrl.readAllLocations)

router.delete('/', auth.verifyToken, userCtrl.deleteAllLocations)

module.exports = router
