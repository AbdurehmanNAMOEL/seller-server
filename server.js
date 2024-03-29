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

const app = express()
app.use(express.static('public'));
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())



app.use('/',route)
app.use('/',gemStoneRoute)
app.use('/admin',adminRoute)
app.use('/',stripeRoute)
app.use('/agent',agentRoute)
app.use('/',notificationRoute)
app.use('/',reportRoute)
app.use('/',transactionRoute)
app.use('/',walletRoute)
mongoose.set('strictQuery', true)
connectDb()
  
const PORT = process.env.PORT  || 5000
app.listen(PORT,()=>{
    console.log('server is running')
})
