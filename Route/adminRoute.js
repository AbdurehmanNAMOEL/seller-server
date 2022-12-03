const express = require('express');
const adminRoute = express.Router()
const{adminSignUp,adminLogin}= require('../controllers/aminController')
adminRoute.post('/signUp',adminSignUp)
adminRoute.post('/login',adminLogin)
module.exports= adminRoute