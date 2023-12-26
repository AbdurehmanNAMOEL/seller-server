const mongoose=require('mongoose')

const notificationSchema=mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    }
},{timeStamp:true})

module.exports=mongoose.model('notification',notificationSchema)