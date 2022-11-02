const express = require('express')
const router = express.Router()
const authControllers = require('../controller/auth.controller')

/* GET users listing. */
router.get('/', authControllers.getMe)
router.post('/signup', authControllers.signup)
router.post('/login', authControllers.login)

module.exports = router
