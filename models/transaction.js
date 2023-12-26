const mongoose=require('mongoose')

const transactionSchema=mongoose.Schema({
    transferTo:{
        type:String,
        required:true
    },
    amountWithVat:{
        type:String,
        required:true
    },
    agentId:{
        type:String,
        required:true
    }
},{timeStamp:true})

module.exports=mongoose.model('transaction',transactionSchema)