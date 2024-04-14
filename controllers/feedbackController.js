const feedbacksModel = require("../models/feedbacksModel")

const createFeedback=async(req,res)=>{
    const {userEmail,userName,userMessage}=req.body
    try {
         const feedback=await feedbacksModel.find({userMessage})
       
         if(feedback[0]){
            res.status(403).json({message:'You have already sent this message'})
         }else{
            const createNewFeedback=await feedbacksModel.create({
               userEmail:userEmail,
               userName:userName,
               userMessage:userMessage 
            })
           res.status(200).json(createNewFeedback) 
         }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getAllFeedbacks=async(req,res)=>{
    const {userEmail,userName,userMessage}=req.body
    try {
         const feedback=await feedbacksModel.find()
         if(!feedback){
            res.status(200).json({message:'there is no feedback yet'})
         }else{
           res.status(200).json(feedback) 
         }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteFeedback=async(req,res)=>{
    const {id}=req.params
    try {
         const feedback=await feedbacksModel.findOne({id})
         if(!feedback){
            res.status(200).json({message:'there is no feedback yet'})
         }else{
          await feedbacksModel.findByIdAndRemove(id,{new:true})
         }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}


module.exports={
    createFeedback,
    getAllFeedbacks,
    deleteFeedback
}