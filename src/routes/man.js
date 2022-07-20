const express = require('express');
const router = express.Router();
const mancontroller = require('../app/controllers/mancontroller')

router.get('/search', mancontroller.search)
router.get('/', mancontroller.index)
module.exports = router;