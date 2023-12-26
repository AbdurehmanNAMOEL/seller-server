const mongoose=require('mongoose')

const walletSchema=mongoose.Schema({
    walletBalance:{
        type:String,
        required:true
    },
    checkOutBalance:{
        type:String,
        required:true
    }
},{timeStamp:true})

module.exports=mongoose.model('wallet',walletSchema)