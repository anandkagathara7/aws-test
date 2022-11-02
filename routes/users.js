const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')
/* GET users listing. */
router.get('/', userController.getMe)

module.exports = router
