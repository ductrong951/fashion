const express = require('express');
const router = express.Router();
const childmancontroller = require('../app/controllers/child-mancontroller')

router.get('/search', childmancontroller.search)
router.get('/', childmancontroller.index)
module.exports = router;