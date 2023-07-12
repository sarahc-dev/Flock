const express = require('express')
const EventController = require('../controller/eventController')

const router = express.Router()

router.post('/', EventController.Create)
router.get('/:id', EventController.Index)

module.exports = router
