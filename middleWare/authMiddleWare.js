const asyncHandler= require('express-async-handler')
const jwt = require('jsonwebtoken')
const protect = asyncHandler(async(req,res,next)=>{ 
   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
       const token = req.headers.authorization.split(' ')[1]
       const decode = jwt.verify(token,process.env.SECRETE_KEY)
       req.userId = decode.id
      next() 
   }else res.status(401).json({error:'Not authorized'})
})

module.exports = protect