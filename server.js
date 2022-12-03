const express = require('express')
const cors = require('cors')
const connectDb = require('./configure/db')
const  route  = require('./Route/sellerRoute')
const gemStoneRoute = require('./Route/gemStoneRoute')
const adminRoute= require('./Route/adminRoute')
const app = express()
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())
require('dotenv').config()
connectDb()

app.use('/home',route)
app.use('/home',gemStoneRoute)
app.use('/admin',adminRoute)

const PORT = process.env.PORT  || 5000
app.listen(PORT,()=>{
    console.log('server is running')
})
