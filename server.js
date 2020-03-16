'use strict'
const express =  require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app  = express()

mongoose.connect('mongodb+srv://wilson:51241314@cluster0-noxyc.mongodb.net/websearchapi/sites?retryWrites=true&w=majority', {
    useNewUrlParser: true,  
    useUnifiedTopology: true
})

app.use( cors({credentials: true, origin: true}))