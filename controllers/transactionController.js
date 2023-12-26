const transaction = require("../models/transaction")

const createTransaction=async(req,res)=>{
   const {transferTo,amountWithVat,agentId}=req.body
    try {
         await transaction.create({
            transferTo:transferTo,
            amountWithVat:amountWithVat,
            agentId:agentId
         })
         
         res.status(200).json({message:'Transaction successfully taken place'})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getAgentTransaction=async(req,res)=>{
   const {agentId}=req.params
    try {
         const response=await transaction.find({agentId})
         if(!response){
           res.status(402).json({message:'there is no transaction'})     
         }else res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const getAllTransaction=async(req,res)=>{

    try {
         const response=await transaction.find()
         if(!response){
           res.status(402).json({message:'there is no transaction'})     
         }else res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports={
 createTransaction,
 getAgentTransaction,
 getAllTransaction
}