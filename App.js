const express = require('express')                                  //grants access to express packages
const bodyParser = require('body-parser')
const app = express()                                               //initialising server
const mongoose = require('mongoose')
const tweet = require('./api/tweet')
const User = require('./api/user')

app.use(bodyParser.json())
app.use('/tweet',tweet)                                         //importing the newly posted tweet at the /tweet/new endpoint
app.use('/User', User)

mongoose.connect('mongodb://localhost/twitter',{                //connecting the project to the database
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


app.listen(3000)                                                //server listening on the port 3000

                                                         