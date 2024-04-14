const asyncHandler= require('express-async-handler')
const bt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const agentModel = require('../models/agentModel')
const generateId = require('../utils/id_generator')
const walletModel = require('../models/walletModel')

const id=generateId()

const createAgent=async(req,res)=>{
   const {phoneNumber,fullName,password,address}=req.body
     try {
        const agentData=await agentModel.findOne({phoneNumber})
        if(agentData?.phoneNumber){
            res.status(402).json('user already exist')
        }else{
            const salt=await bt.genSalt(10)
            const hashedPassword=await bt.hash(password,salt)
            await walletModel.create({
                walletBalance:10000,
                checkOutBalance:500,
                agentId:id
            })
            const newAgent=await agentModel.create({
                phoneNumber:phoneNumber,
                fullName:fullName,
                agentId:id,
                status:false,
                password:hashedPassword,
                address:address
            })
            const token=jwt.sign({newAgent},process.env.SECRETE_KEY,{expiresIn:'30day'})
           res.status(200).json(token)
        }
        
     } catch (error) {
         res.status(500).json({message:error})
     }
}


const updateAgentInfo=async(req,res)=>{
    const {fullName,publicId,address,agentId,password}=req.body
    try {
          const response=await agentModel.findOne({agentId})
          if(!response){
             res.status(402).json({message:"agent doesn't exist"})
          }else{
             const salt=await bt.genSalt(10)
            const hashedPassword= await bt.hash(password,salt)
            await agentModel.findByIdAndUpdate(response._id,{
             fullName:fullName,
             publicId:publicId,
             address:address,
             password:hashedPassword
            },{new:true})
            res.status(200).json({message:'successfully updated'})
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const login=async(req,res)=>{
    const {password,phoneNumber}=req.body
    try {
          const response=await agentModel.findOne({phoneNumber})
          if(!response){
             res.status(402).json({message:"user doesn't exist"})
          }else{
            if(!await bt.compare(password,response.password)){
              res.status(402).json({message:"Incorrect password"})
            }else{
            const token=jwt.sign({response},process.env.SECRETE_KEY,{expiresIn:'30day'})
            res.status(200).json({message:token,userData:response})
        }
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getAgentInfo=async(req,res)=>{
    const {agentId}=req.params
    try {
          const response=await agentModel.findOne({agentId})
          if(!response){
             res.status(401).json({message:"agent doesn't exist"})
          }else{
            res.status(200).json(response)
        }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const getAllAgentInfo=async(req,res)=>{
    try {
          const response=await agentModel.find()
          if(!response){
             res.status(401).json({message:"there is no agent"})
          }else{
            res.status(200).json(response)
        }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const updatedPassword=async(req,res)=>{
    const {oldPassword,newPassword,agentId}=req.body
    try {
          const response=await agentModel.findOne({agentId})
          
          if(!response?.phoneNumber){
             res.status(402).json({message:"user doesn't exist"})
          }else{
            if(!await bt.compare(oldPassword,response?.password)){
              res.status(402).json({message:"Incorrect password"})
            }else{
            const salt=await bt.genSalt(10)
            const hashedPassword= await bt.hash(newPassword,salt)
            const updatedValue=await agentModel.findByIdAndUpdate(
            response?._id,{
             password:hashedPassword,
            },{new:true})
            const token=jwt.sign({updatedValue},process.env.SECRETE_KEY,{expiresIn:'30day'})
            res.status(200).json(token)
        }
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const agentCount = asyncHandler(async(req,res)=>{
    const user = await agentModel?.find()?.count()
    if(user===0){
        res.status(200).json(0)
    }else {
        res.status(200).json(user)
    }
})

const updateAgentStatus = asyncHandler(async(req,res)=>{
    const {id}=req.params
    const agent = await agentModel?.findOne({agentId:id})
    if(!agent){
        res.status(401).json({message:"Agent is not found"})
    }else {
        await agentModel.findByIdAndUpdate(agent?._id,{
            status:!agent.status
        },{new:true})
        res.status(200).json({message:'Agent status is updated'})
    }
})

const getAgentWithLocation = asyncHandler(async(req,res)=>{
    const {id}=req.params
    const user = await agentModel?.find({address:id})
    console.log(user);
    if(!user){
        res.status(201).json({message:"Agent is not found in this location"})
    }else {
        const agentData=user.map(data=>{
           return { 
            fullName:data?.fullName,
            phoneNumber:data?.phoneNumber,
            address:data?.address,
            rating:data?.rating,
            profileImage:data?.profileImage}
        }) 

        
        console.log(agentData);
        res.status(200).json(agentData)
    }
})

const updateAgentPublicId = asyncHandler(async(req,res)=>{
    const {publicId,agentId}=req.body
    const agent = await agentModel?.findOne({agentId})
    if(!agent){
        res.status(401).json({message:"Agent is not found"})
    }else {
        await agentModel.findByIdAndUpdate(agent?._id,{
            publicId:publicId
        },{new:true})
        res.status(200).json({message:'Agent status is updated'})
    }
})
const updateAgentProfileImage = asyncHandler(async(req,res)=>{
    const {profileImage,agentId}=req.body
    const agent = await agentModel?.findOne({agentId})
    if(!agent){
        res.status(401).json({message:"Agent is not found"})
    }else {
        await agentModel.findByIdAndUpdate(agent?._id,{
            profileImage:profileImage
        },{new:true})
        res.status(200).json({message:'Agent status is updated'})
    }
})


module.exports={
    createAgent,
    updatedPassword,
    login,
    getAgentInfo,
    getAllAgentInfo,
    updateAgentInfo,
    agentCount,
    getAgentWithLocation,
    updateAgentStatus,
    updateAgentPublicId,
    updateAgentProfileImage
}