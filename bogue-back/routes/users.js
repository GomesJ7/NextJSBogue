const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const cors = require('cors')

router.use(cors())

router.get('/', auth.verifyToken, userCtrl.readAllUsers)

router.delete('/', auth.verifyToken, auth.admin, userCtrl.deleteAllUsers)

module.exports = router
