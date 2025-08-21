const logger = require("../utils/logger")
const CreateError = require('http-errors')

exports.testServices = async (req,res) => {
  logger.info('GET /app/v1/test endpoint called', { lang: req.getLocale() })
  const x=true
  if (x)
  throw CreateError(500, req.__('test.Internal_Server_Error') )
  return {
    status: 'success',
    message: 'API is working 🎯',
    lang: req.getLocale()
  }
}
exports.loginServices = async (req, res) => {
  logger.info('POST /app/v1/test/login endpoint called', { lang: req.getLocale() })
  // Simulate login logic
  const { email, password } = req.body
  // if (!email || !password) {
  //   throw CreateError(400, 'Username and password are required')
  // }
  
  

    return {
      status: 'success',
      message: 'Login successful',
      user: { id: 1, email }
    }


}