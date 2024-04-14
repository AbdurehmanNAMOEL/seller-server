const mongoose=require('mongoose')

const soldSchema=mongoose.Schema({
    BuyerName:{
        type:String,
        required:true
    },
    mineralInfo:{
        type:Array,
        required:true
    },

},{timeStamp:true})

module.exports=mongoose.model('sold',soldSchema)