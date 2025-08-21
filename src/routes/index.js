const express = require('express')
const logger = require('../utils/logger')
const testRoutes = require('./test.routes.js')
const router = express.Router()

router.use("/test",testRoutes)
module.exports = router
