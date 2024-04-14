const walletModel = require("../models/walletModel")


const createWallet=async(req,res)=>{
    const {agentId,walletBalance}=req.body
    try {
          const response=await walletModel.findOne({agentId})
          if(response){
            res.status(402).json({message:'User Wallet exist'})
          }else{
            await walletModel.create({
                walletBalance:10000,
                checkOutBalance:500,
                agentId:agentId
            })
            res.status(200).json({message:'wallet created'})
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const updateWallet=async(req,res)=>{
    const {agentId,walletBalance}=req.body
    try {
          const response=await walletModel.findOne({agentId})
          if(!response){
            res.status(402).json({message:"Wallet doesn't exist"})
          }else{
            await walletModel.findByIdAndUpdate(response._id,{
                walletBalance:walletBalance,
            },{new:true})

            res.status(200).json({message:'wallet updated'})
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getAgentWallet=async(req,res)=>{
    const {id}=req.params
    try {
          const response=await walletModel.findOne({agentId:id})
          if(!response){
            res.status(401).json({message:"Wallet doesn't exist"})
          }else{
            res.status(200).json(response)
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteWallet=async(req,res)=>{
    const {agentId}=req.body
    try {
          const response=await walletModel.findOne({agentId})
          if(!response){
            res.status(402).json({message:"Wallet doesn't exist"})
          }else{
            await walletModel.findByIdAndDelete(response._id)

            res.status(200).json({message:'wallet deleted'})
          }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports={
    createWallet,
    updateWallet,
    deleteWallet,
    getAgentWallet
}