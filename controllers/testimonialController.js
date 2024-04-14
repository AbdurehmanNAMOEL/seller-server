const testimonialModel = require("../models/testimonialModel")

const createTestimonial=async(req,res)=>{
    const {userEmail,userName,userMessage}=req.body
    try {
         const testimonial=await testimonialModel.find({userMessage})
         if(testimonial[0]){
            res.status(401).json({message:'You have already sent this message'})
         }else{
            const createNewTestimonial=await testimonialModel.create({
               userEmail:userEmail,
               userName:userName,
               userMessage:userMessage 
            })
           res.status(200).json(createNewTestimonial) 
         }        
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const getAllTestimonials=async(req,res)=>{
    try {
         const testimonial=await testimonialModel.find()
         if(!testimonial[0])res.status(201).json({message:'there is no testimonial'})
         else res.status(200).json(testimonial)    
    } catch (error) {
        res.status(500).json({message:error})
    }
}


module.exports={
    createTestimonial,
    getAllTestimonials
}