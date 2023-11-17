const asyncHandler= require('express-async-handler')
const bt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const sendEmail = require('../configure/gmail')

const signUp =async(req,res)=>{
   const {name,email,password,confirmPassword,phoneNumber,profileImage} =req.body
   
    try {
        const user = await User.findOne({email})
        if(user){
          res.status(400).json({error:"user already exist"})
        }else
        { 
            if(name===''||email===''||password===''||confirmPassword===''||phoneNumber===''){
            res.status(400).json({error:"please complete filling the form"})
           } if(!confirmPassword===password){
            res.status(400).json({error:"password and confirmPassword must be the same"})
           }else{ 
              const salt= await bt.genSalt() 
              const hashedPassword = await bt.hash(password,salt)
              const newUser = await User.create({ name,
               email,
               password:hashedPassword,
               confirmPassword:hashedPassword,
               phoneNumber,
               profileImage
               })
          
               const token = jwt.sign({id:newUser._id},process.env.SECRETE_KEY,{expiresIn:'1d'})
               res.status(200).json({token})
            }
        }
       } catch (error) {
        res.status(400).json({error:error.errors})
       }
        
    }



const signIn = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        res.status(404).json({error:"User doesn't exist"})
    }
    if(!(await bt.compare(password,user.password))){
        res.status(401).json({error:"Invalid Password"})
    }else {
        const token = jwt.sign({id:user._id},process.env.SECRETE_KEY,{expiresIn:'30d'})
        res.status(200).json({token})
    }
})


const googleSignIn = asyncHandler(async(req,res)=>{
 
    const {email} = req.body
    const user = await User.findOne({email})
    if(!user){
        res.status(404).json({error:"User doesn't exist"})
    }else {
        const token = jwt.sign({id:user._id},process.env.SECRETE_KEY,{expiresIn:'30d'})
        res.status(200).json({token})
    }
})


const getUser = asyncHandler(async(req,res)=>{
  
    const user = await User.findById(req.userId)
    if(!user){
        res.status(404).json({error:"User doesn't exist"})
    }else{
           const userData = {
            name:user.name,
            email:user.email,
            profileImage:user.profileImage,
            phoneNumber:user.phoneNumber
           }
         res.status(200).json(userData)
    }
    
})


 
const getAllUser=async(req,res)=>{
   const sellers=await User.find()
   if(!sellers){
    console.log('error is found');
    res.status(400).json({error:"user is not found"})
   }else res.status(200).json(sellers)
}



const letter='abcdefghijklmnopqrstvxyz'




const updatePassword = asyncHandler(async(req,res)=>{
    const {email} = req.body
    const user = await User.findOne({email})
    console.log(user);
    if(!user){
        res.status(404).json({error:"User doesn't exist"})
    }else if(user){
    sendEmail(user.email,user._id)}
    res.status(200).json(user)
})


const newPassword= async(req,res)=>{

    const {id} = req.params

    try {
       console.log(id);
       const{password,confirmPassword}= req.body
       const user = await User.findById(id)
      if(!user){
        res.status(404).json({error:"user doesn't exist"})
    }else{
         const salt= await bt.genSalt() 
         const hashedPassword = await bt.hash(password,salt) 
         const updatedPassword = await User.findByIdAndUpdate(id,
        {password:hashedPassword,confirmPassword:hashedPassword},{new:true}    
        )
     
        res.status(200).json(updatedPassword)
}      
    } catch (error) {
         res.status(404).json(error)
    }
  
}


// const newPassword = asyncHandler(async(req,res)=>{
//     const {email,password} = req.body
//     const user = await User.findOne({email})
//     if(!user){
//         res.status(404).json({error:"User doesn't exist"})
//     }else if(user){ 
//     const salt= await bt.genSalt() 
//     const hashedPassword = await bt.hash(password,salt) 
//     const updatedPassWord = await User.findByIdAndUpdate(user._id,{password:hashedPassword},{new:true})
//     res.status(200).json(updatedPassWord)
    
//     }
    
// })


module.exports ={
signUp,
signIn,
updatePassword,
getUser,
googleSignIn,
getAllUser,
newPassword
}