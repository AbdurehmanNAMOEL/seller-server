const mongoose=require('mongoose')

const walletSchema=mongoose.Schema({
    agentId:{
        type:String,
        required:[true,"agent id required"]
    },
    walletBalance:{
        type:Number,
        required:true
    },
    checkOutBalance:{
        type:Number,
        required:true
    }
},{timeStamp:true})

module.exports=mongoose.model('wallet',walletSchema)