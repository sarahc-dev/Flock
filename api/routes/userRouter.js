const express = require('express')
const UserController = require('../controller/userController')

const router = express.Router()

router.post('/', UserController.Create)
router.patch('/:id', UserController.UpdateChoices)

module.exports = router
