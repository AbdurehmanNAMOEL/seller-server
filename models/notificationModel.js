const mongoose=require('mongoose')

const notificationSchema=mongoose.Schema({
    agentId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timeStamp:true})

module.exports=mongoose.model('notification',notificationSchema)