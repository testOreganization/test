const { testServices, loginServices } = require('../services/test.services.js')

const testController = async (req, res, next) => {
  try {
    const result=await testServices(req, res)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
const loginCotroller = async (req, res, next) => {
 try {
   const result = await loginServices(req, res)
   res.status(200).json(result)
 } catch (error) {
   next(error)
 }
}

module.exports = {testController, loginCotroller}
