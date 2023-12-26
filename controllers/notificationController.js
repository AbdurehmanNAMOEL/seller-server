const notificationModel = require("../models/notificationModel")


const createNotification=async(req,res)=>{
    const {from,name,about}=req.body
    try {
        const notification=await notificationModel.find({name})
        if(notification){
            const userMessage=await notificationModel.find({about})
            if(userMessage){
                res.status(401).json({message:'message already exist'})
            }else{
                await notification.create({from:from,name:name,about:about})
                res.status(200).json({message:'successfully sent'})
            }
        }else{
               await notification.create({from:from,name:name,about:about})
              res.status(200).json({message:'successfully sent'})
            }        
    } catch (error) {
        
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

module.exports={
    createNotification,
    getAllNotification
}