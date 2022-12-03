const express = require('express');
const { 
signUp,
signIn,
updatePassword,
getUser,
googleSignIn,
getAllUser,
newPassword
} = require('../controllers/sellerController');
const protect = require('../middleWare/authMiddleWare');
const route = express.Router()

route.post('/signup',signUp)
route.post('/google',googleSignIn)
route.post('/signIn',signIn)
route.get('/allUser',getAllUser)
route.get('/userExist:id',getAllUser)
route.get('/getUser',protect,getUser)
route.post('/update',updatePassword)
route.put('/newPassword/:id',newPassword)



module.exports= route