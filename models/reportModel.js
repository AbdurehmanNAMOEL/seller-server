const mongoose = require('mongoose')

const reportSchema= mongoose.Schema({
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
        type:String,
        required:[true,'price is required']
    },
    numberOfGemstone:{
        type:String,
        required:[true,'price is required']
    },
    quality:{
        type:String,
        required:[true,'quality is required']
    },
    type:{
        type:String,
        required:true
    },
    sellerName:{
        type:String,
        required:[true,'Seller name is required']
    },
    sellerPhoneNumber:{
        type:String,
        required:[true,'Seller phoneNumber is required']
    },
    uploadedBy:{
         type:String,
        required:[true,'please enter your user type "User/agent" is required']
    },
    agentId:{
         type:String,  
    }

},{timeStamps:true})

 module.exports = mongoose.model('report',reportSchema)