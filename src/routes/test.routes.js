const express = require('express')
const router = express.Router()
const {
  testController,
  loginCotroller
} = require('../controllers/test.controller.js')
const validateBodyMiddleware = require('../middlewares/validateBody.middleware.js')
const { loginSchema } = require('../schemas/users.schemas.js')

router.get('/', testController)
router.post('/', validateBodyMiddleware(loginSchema), loginCotroller) 
module.exports = router
