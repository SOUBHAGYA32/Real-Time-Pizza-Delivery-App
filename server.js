const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app=express()

const PORT = process.env.PORT || 3000


app.get('/' , (req , res)=>{

   res.render('index')

})

// Assets
app.use(express.static('public'))


//Set Template Engine
app.set("view engine", "ejs")

app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`)
})

