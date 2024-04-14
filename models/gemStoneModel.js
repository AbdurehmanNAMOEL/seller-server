const mongoose = require('mongoose')

const gemStoneSchema= mongoose.Schema({
    mineralName:{
        type:String,
        required:[true,'mineral is required']
    },
    weight:{
        type:String,
        required:[true,'email is required']
    },
    image:{
        type:Array,
        required:[true,'gemstone image is required']
    },
    price:{
        type:Number,
        required:[true,'price is required']
    },
    numberOfGemstone:{
        type:Number,
        required:[true,'price is required']
    },
    quality:{
        type:String,
        required:[true,'quality is required']
    },
    isPolished:{
        type:Boolean,
        required:true
    },

},{timeStamps:true})

 module.exports = mongoose.model('gemStone',gemStoneSchema)