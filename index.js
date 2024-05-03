const express = require('express')
const cors = require('cors')


const { connect } = require('./config/connectDB')
const addContact = require("./routes/contact.route.js")
require('dotenv').config()


const app = express()


app.use(cors())
app.use(express.json())

connect()

app.use('/api/contact', addContact)






app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(5000, console.log("Port running on 5000"))

//pudj tlpl wtfk pfln