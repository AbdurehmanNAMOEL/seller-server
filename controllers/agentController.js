const bt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const agentModel = require('../models/agentModel')
const generateId = require('../utils/id_generator')

const createAgent=async(req,res)=>{
    const {fullName,password,phoneNumber,address,agentId,publicId}=req.body
    try {
          const response=await agentModel.findOne({agentId})
          if(response){
             res.status(402).json({message:'agent already exist'})
          }else{
            const salt=await bt.genSalt(10)
            const hashedPassword= bt.hash(password,salt)
            const newAgent=await agentModel.create({
             fullName:fullName,
             password:hashedPassword,
             phoneNumber:phoneNumber,
             address:address,
             publicId:publicId,
             agentId:generateId()
            })
            const token=jwt.sign({newAgent},process.env.SECRETE_KEY,{expiresIn:'30day'})
            res.status(200).json({message:token})
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const updateAgentInfo=async(req,res)=>{
    const {fullName,publicId,address,agentId}=req.body
    try {
          const response=await agentModel.findOne({agentId})
          if(!response){
             res.status(402).json({message:"agent doesn't exist"})
          }else{
            await agentModel.findByIdAndUpdate(response._id,{
             fullName:fullName,
             publicId:publicId,
             address:address,
            },{new:true})
            res.status(200).json({message:'successfully updated'})
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const login=async(req,res)=>{
    const {password,agentId}=req.body
    try {
          const response=await agentModel.findOne({agentId})
          if(!response){
             res.status(402).json({message:"user doesn't exist"})
          }else{
            if(!await bt.compare(password,response.password)){
              res.status(402).json({message:"Incorrect password"})
            }else{
            const token=jwt.sign({updatedValue},process.env.SECRETE_KEY,{expiresIn:'30day'})
            res.status(200).json({message:token})
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
          if(!response){
             res.status(402).json({message:"user doesn't exist"})
          }else{
            if(!await bt.compare(oldPassword,response.password)){
              res.status(402).json({message:"Incorrect password"})
            }else{
            const salt=await bt.genSalt(10)
            const hashedPassword= bt.hash(newPassword,salt)
            const updatedValue=await agentModel.findByIdAndUpdate(
            response._id,{
            password:hashedPassword,
             agentId:response.agentId
            })
            const token=jwt.sign({updatedValue},process.env.SECRETE_KEY,{expiresIn:'30day'})
            res.status(200).json({message:token})
        }
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports={
    createAgent,
    updatedPassword,
    login,
    getAgentInfo,
    getAllAgentInfo,
    updateAgentInfo
}