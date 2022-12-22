const dotenv = require('dotenv')
const express = require('express')
const logger = require('./middleware/logger')
const authRouter = require('./routes/authentication')
const profileRouter = require("./routes/profileRoutes")
const app = express()
const connectDb = require('./config/db.js')


dotenv.config()

app.use(express.json())
app.use(express.urlencoded())

app.use(logger)

connectDb()

app.get('/greetings', logger, (req, res) => {
  // res.send("hello greetings :)")
  return res.status(200).json({
    message: 'hello project!! :)'
  })
})

// follow a format of hitting request
app.use('/api/auth', authRouter)
app.use('/api/profile/' , profileRouter)

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.log(`server is running of ${process.env.PORT} `)
})
