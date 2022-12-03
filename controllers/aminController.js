const adminModel = require('../models/adminModel')
const bt= require('bcryptjs')
const jwt= require('jsonwebtoken')

const adminSignUp= async(req,res)=>{
    const {email,password}=req.body
    try {
         const newAdmin = await adminModel.findOne({email})
         if(newAdmin){
            res.status(400).json({error:"User already exist"})
         }else if(!newAdmin){
            const salt= await bt.genSalt();
            const hashedPassword= await bt.hash(password,salt)
            const admin =await adminModel.create({email,password:hashedPassword})
            const token = jwt.sign({id:admin._id},process.env.SECRETE_KEY,{expiresIn:'30d'})
            res.status(200).json({admin,token})

         }
    } catch (error) {
        res.status(400).json({error})
    }
}


const adminLogin=async(req,res)=>{
    const {email,password}=req.body
    try {
        const admin = await adminModel.findOne({email})
        
        if(!admin){
            res.status(400).json({error:"User doesn't exist"})
        }else {
          
          if(!(await bt.compare(password,admin.password))){
                res.status(401).json({error:"invalid password"}) 
          }else {
            const token = jwt.sign({id:admin._id},process.env.SECRETE_KEY,{expiresIn:'30d'})
            res.status(200).json({token})
          }
               
        }
    } catch (error) {
         res.status(400).json(error)
    }
}

module.exports={
    adminLogin,
    adminSignUp
}


