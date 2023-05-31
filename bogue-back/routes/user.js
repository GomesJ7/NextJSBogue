const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const cors = require('cors')

router.use(cors())

router.get('/:id', auth.verifyToken, userCtrl.readUserById)

router.post('/login', userCtrl.login)

router.post('/register', userCtrl.register)

router.patch('/:id', auth.verifyToken, userCtrl.updateUserById)

router.delete('/:id', auth.verifyToken, userCtrl.deleteUserById)

module.exports = router
