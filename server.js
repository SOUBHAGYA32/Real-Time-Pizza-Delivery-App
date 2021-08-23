require('dotenv').config()
const express = require('express')
const app=express()

const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const session = require('express-session')
const flash = require('express-flash')
const MongoStore = require('connect-mongo');
const passport = require('passport')



const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

//Database Connection
const url = 'mongodb://localhost:27017/pizza'
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('Database Connected Successfully....')
}).catch(err => {
    console.log('Connection failed...')
});




//mongo Store Session
let mongostore = MongoStore.create({ mongoUrl: 'mongodb://localhost/sessions' })

//Session Config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongostore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
}))
// Passport config
const passportInit = require('./app/config/passport') // Passport Config Separate file
passportInit(passport) //Call
app.use(passport.initialize())
app.use(passport.session())

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})


app.use(express.urlencoded({extended:false}))//object view on console
app.use(express.json())
app.use(flash())

// Assets
app.use(express.static('public'))


// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


//Routes 
require('./routes/router')(app)







app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`)
})

