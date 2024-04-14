const notificationModel = require("../models/notificationModel")


const createNotification=async(req,res)=>{
    const {agentId,message}=req.body
    try {
        const newNotification=await notificationModel.findOne({agentId})
        if(newNotification){
            const userMessage=await notificationModel.findOne({message})
            if(userMessage){
                res.status(401).json({message:'message already exist'})
            }else{
                await notificationModel.create({agentId:agentId,message:message})
                res.status(200).json({message:'successfully sent'})
            }
        }else{
               await notificationModel.create({agentId:agentId,message:message})
           
              res.status(200).json({message:'successfully sent'})
            }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getAllNotification=async(req,res)=>{
    try {
        const notification=await notificationModel.find()
        if(!notification){
          res.status(401).json({message:'there is no notification'})
        }else res.status(200).json(notification)
                
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const getAgentAllNotification=async(req,res)=>{
    const {id}=req.params
    try {
        const notification=await notificationModel.find({agentId:id})
        if(!notification){
          res.status(401).json({message:'there is no notification'})
        }else res.status(200).json(notification)
                
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports={
    createNotification,
    getAllNotification,
    getAgentAllNotification
}