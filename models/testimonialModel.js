const mongoose=require('mongoose')

const testimonialSchema=mongoose.Schema({
    userEmail:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    userMessage:{
        type:String,
        required:true
    }
},{timeStamp:true})

module.exports=mongoose.model('testimonial',testimonialSchema)