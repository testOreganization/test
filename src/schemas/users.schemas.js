const Joi = require('joi')
const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email format',


  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'test.password_min_length',
    'any.required': 'Password is required'
  })
})
module.exports = {loginSchema}