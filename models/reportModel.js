const mongoose=require('mongoose')

const reportSchema=mongoose.Schema({
    agentId:{
        type:String,
        required:true
    },
    sellerName:{
        type:String,
        required:true
    },
    sellerPhone:{
        type:String,
        required:true
    },
    mineralType:{
        type:String,
        required:true
    },
    mineralWeight:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mineralImage:{
      type:Array,
      required:true
    }
})

module.exports=mongoose.model('reports',reportSchema)