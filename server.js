const express = require('express')
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const app=express()

const PORT = process.env.PORT || 3000



// Assets
app.use(express.static('public'))



// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


app.get('/' , (req , res)=>{

    res.render('pages/home')
 
 })
app.get('/cart' , (req , res)=>{
 
    res.render('customers/cart')
 
 })

app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`)
})

