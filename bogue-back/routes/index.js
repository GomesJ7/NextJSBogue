const express = require('express')
const router = express.Router()
const cors = require('cors')

router.use(cors())

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

module.exports = router
