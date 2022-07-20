const express = require('express');
const router = express.Router();
const productcontroller = require('../app/controllers/productcontroller')

router.get('/', productcontroller.list)
router.get('/create', productcontroller.create)
router.post('/stored', productcontroller.stored)
router.get('/:id/edit', productcontroller.edit)
router.put('/:id', productcontroller.update)
router.delete('/:id', productcontroller.delete)
router.get('/:slug', productcontroller.detail)

module.exports = router;