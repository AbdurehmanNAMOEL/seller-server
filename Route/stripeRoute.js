const express=require('express')
const stripeCheckOut = require('../controllers/stripeController')

const stripeRoute=express.Router()

stripeRoute.post('/create-checkout-session',stripeCheckOut)

module.exports=stripeRoute

