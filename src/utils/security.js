const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const express = require('express')

exports.security = (app) => {
  // set security HTTP headers
  app.use(helmet())

  app.set('trust proxy', 1)

  // Limit requests from same API
  const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
  })
  app.use('/', limiter)
  app.use(express.json({ limit: '10kb' }))

  // Data sanitization against noSQL query injection
  app.use(mongoSanitize())

  // Data sanitization against XSS
  app.use(xss())

  // prevent parameter pollution
  app.use(
    hpp({
      whitelist: []
    })
  )
}
