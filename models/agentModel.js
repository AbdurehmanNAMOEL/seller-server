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
    publicId:{
        type:String,  
    },
    password:{
        type:String,
        
    },
    agentId:{
        type:String,    
    }
})

module.exports=mongoose.model('agents',agentSchema)