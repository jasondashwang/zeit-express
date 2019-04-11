const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userSchema = require('./schemas/user.js');


var connectorMongodb =  mongoose.connect(process.env.DATABASE_STRING);

const User = mongoose.model('User', userSchema, 'User');

const app = express()

app.use(bodyParser());
// add some security-related headers to the response
app.use(helmet())
connectorMongodb.then(() => {
    app.get('*', (req, res) => {
        res.set('Content-Type', 'text/html')
        res.send(200, `
            <h1><marquee direction=right>Hello from Express path '/' on Now 2.0!</marquee></h1>
            <h2>Go to <a href="/about">/about</a></h2>
        `)
        mongoose.connection.close()
    })
})

module.exports = app
