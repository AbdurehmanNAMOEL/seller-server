require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./configure/db')
const  route  = require('./Route/userRoute')
const gemStoneRoute = require('./Route/gemStoneRoute')
const adminRoute= require('./Route/adminRoute')

const app = express()
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())
connectDb()

app.use('/',route)
app.use('/',gemStoneRoute)
app.use('/admin',adminRoute)

const PORT = process.env.PORT  || 5000
app.listen(PORT,()=>{
    console.log('server is running')
})
