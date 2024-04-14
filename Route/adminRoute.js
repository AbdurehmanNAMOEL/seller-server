const express = require('express');
const adminRoute = express.Router()
const{adminSignUp,adminLogin}= require('../controllers/aminController')
adminRoute.post('/admin_signUp',adminSignUp)
adminRoute.post('/admin_login',adminLogin)
module.exports= adminRoute