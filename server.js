require('dotenv').config()

var express = require('express')
var app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())
const items = require('./routes/items')
app.use('/items', items)


app.listen(3400, function()
{console.log(`Server is listening on port 3400`)})
module.exports = app;