var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/govwifi', (req, res) => {
  res.render('govwifi/index')
})

module.exports = router
