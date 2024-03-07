const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

// * server connecting
connectDB();

// * express initializing
const app = express()

//* json middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ! routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// ! middleware
app.use(errorHandler)

app.listen(port, () => console.log(`server running on http://localhost:${port}`))