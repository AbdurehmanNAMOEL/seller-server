const mongoose=require('mongoose')

const feedbackSchema=mongoose.Schema({
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
})

module.exports=mongoose.model('feedback',feedbackSchema)