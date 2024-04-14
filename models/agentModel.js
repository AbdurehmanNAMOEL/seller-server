const mongoose=require('mongoose')

const agentSchema=mongoose.Schema({
    fullName:{
        type:String,
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        
    },
    profileImage:{
    type:String,
    },
    publicId:{
        type:String,  
    },
    password:{
        type:String,
        
    },
    agentId:{
        type:String,    
    },
    status:{
        type:Boolean,    
    },
    numberOfDealClosed:{
        type:Number
    },
    rating:{
        type:Number
    }
})

module.exports=mongoose.model('agents',agentSchema)