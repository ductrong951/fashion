const express = require('express');
const router = express.Router();
const womancontroller = require('../app/controllers/womancontroller')

router.get('/search', womancontroller.search)
router.get('/', womancontroller.index)
module.exports = router;