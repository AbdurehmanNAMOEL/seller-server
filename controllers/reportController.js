const reportModel = require("../models/reportModel")

const createReport=async(req,res)=>{
 const {
  agentId,sellerName,sellerPhone,
  mineralType, mineralWeight,address,
  mineralImage
}=req.body

  try {
      await reportModel.create({
        agentId:agentId,
        sellerName:sellerName,
        sellerPhone:sellerPhone,
        mineralType:mineralType, 
        mineralWeight:mineralWeight,
        address:address,
        mineralImage:mineralImage
      })
      res.status(200).json({message:'report successfully sent'})  
  } catch (error) {
     res.status(500).json({message:error})
  }
}
const getAllReports=async(req,res)=>{

  try {
     const response= await reportModel.find()
     if(!response){
         res.status(402).json({message:'there is no report'})  
     }else res.status(200).json(response)
  } catch (error) {
     res.status(500).json({message:error})
  }
}

module.exports={
 createReport,
 getAllReports
}