const express = require('express');
const router = express.Router();
const childwomancontroller = require('../app/controllers/child-womancontroller')

router.get('/search', childwomancontroller.search)
router.get('/', childwomancontroller.index)
module.exports = router;