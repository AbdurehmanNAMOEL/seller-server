const asyncHandler= require('express-async-handler')
const gemStone = require('../models/gemStoneModel')


const createGemStone = asyncHandler(async(req,res)=>{
   const {mineralName,weight,image,price,numberOfMineral,quality,isPolished} = req.body
   const gemstone=await gemstone.find({mineralName})
   if(gemStone){
       res.status(4003).json({message:"Gemstone already exists"})
   }else{
     const newGemStone = await gemStone.create({
       mineralName:mineralName,
       weight:weight,
       image:image,
       price:price,
       numberOfMineral:numberOfMineral,
       quality:quality,
       isPolished:isPolished
      })
   res.status(200).json(newGemStone)
}     
})

const getGemStone = asyncHandler(async(req,res)=>{   
   const myStone = await gemStone.find({creatorId:req.userId})
   if(!myStone){
     res.status(401).json({error:"Not found"})
   }
   res.status(200).json(myStone)     
})


const getAllGemStone = async(req,res)=>{
 try {
    const myStone = await gemStone.find()
  if(!myStone){
     res.status(401).json({error:"Not found"})
   }else res.status(200).json(myStone)
 } catch (error) {
    res.status(400).json(error)
 }       
}

const updateStone =asyncHandler(async(req,res)=>{
    const {id} = req.params

    const{fullName,mineralName,weight,image,phoneNumber}= req.body
    const stone = await gemStone.findById(id)
    if(!stone){
        res.status(404).json({error:"the stone doesn't exist"})
    }
    if(stone.creatorId!==req.userId){
        res.status(401).json({error:"not authorized"})
    }else{
        const updatedStone = await gemStone.findByIdAndUpdate(id,
        {fullName,mineralName,weight,image,phoneNumber},
        {new:true}    
        )
     
        res.status(200).json(updatedStone)
    }

})

const deleteStone =asyncHandler(async(req,res)=>{
    const {id} = req.params
 
    const stone = await gemStone.findById(id)
  
    if(!stone){
        res.status(404).json({error:"the stone doesn't exist"})
    }
    if(stone.creatorId!==req.userId){
        res.status(401).json({error:"not authorized"})
    }else{
        const deletedStone = await gemStone.findByIdAndRemove(id)
        res.status(200).json(deletedStone)
    }

})


module.exports = {
    createGemStone,
    getGemStone,
    updateStone,
    deleteStone,
    getAllGemStone
}