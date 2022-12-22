const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

module.exports = () => {
  mongoose.connect('mongodb://0.0.0.0:27017/', (error) => {
    if (error) {
      console.log('error databse connection failed')
      throw error
    }
    console.log('Database connection sucessfully ')
  })
}
