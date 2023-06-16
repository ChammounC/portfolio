const express=require('express')
require("dotenv").config()

const sendMail = require('./controllers/sendMail');


const app=express()

const bodyParser =require("body-parser")
const cors=require("cors")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/mail",sendMail)

app.listen((process.env.PORT||4000),()=>{
    console.log('server listening');
})