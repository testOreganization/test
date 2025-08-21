const moongose = require('mongoose')
const userSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
})
const User = moongose.model('User', userSchema)
module.exports = User