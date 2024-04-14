const reportModel = require("../models/reportModel")

const createReport=async(req,res)=>{
 const {
  agentId,sellerName,sellerPhoneNumber,
  mineralName,weight,
  type,quality,
  image,price,numberOfGemstone,uploadedBy
}=req.body

  try {
      await reportModel.create({
        agentId:agentId,
        sellerName:sellerName,
        sellerPhoneNumber:sellerPhoneNumber,
        mineralName:mineralName, 
        weight:weight,
        image:image,
        price:price,
        quality:quality,
        numberOfGemstone:numberOfGemstone,
        uploadedBy:uploadedBy,
        type:type
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