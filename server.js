require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./configure/db')
const mongoose=require('mongoose')
const  route  = require('./Route/userRoute')
const gemStoneRoute = require('./Route/gemStoneRoute')
const adminRoute= require('./Route/adminRoute')
const stripeRoute = require('./Route/stripeRoute')
const agentRoute = require('./Route/agentRoute')
const notificationRoute = require('./Route/notificationRoute')
const reportRoute = require('./Route/reportRoute')
const transactionRoute = require('./Route/transactionRoute')
const walletRoute = require('./Route/walletRoute')
const feedbackRoute = require('./Route/feedbackRoute')
const testimonialRoute = require('./Route/testimonialRoute')

const app = express()
app.use(cors())
app.use(express.static('public'));
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))




app.use('/',route)
app.use('/',gemStoneRoute)
app.use('/',agentRoute)
app.use('/admin',adminRoute)
app.use('/',stripeRoute)
app.use('/agent',agentRoute)
app.use('/',notificationRoute)
app.use('/',reportRoute)
app.use('/',transactionRoute)
app.use('/',walletRoute)
app.use('/',feedbackRoute)
app.use('/',testimonialRoute)
mongoose.set('strictQuery', true)
connectDb()
  
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log('server is running')
})