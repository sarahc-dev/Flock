const express = require('express')
const UserController = require('../controller/userController')

const router = express.Router()

router.post('/', UserController.Create)

module.exports = router
