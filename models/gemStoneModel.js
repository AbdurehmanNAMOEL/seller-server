const mongoose = require('mongoose')

const gemStoneSchema= mongoose.Schema({
    fullName:{
       type:String,
        required:[true,'fullName is required']
    },
    mineralName:{
        type:String,
        required:[true,'mineral is required']
    },
    weight:{
        type:String,
        required:[true,'email is required']
    },
   
    phoneNumber:{
        type:String,
    },
    image:{
        type:Array,
        required:[true,'profile image is required']
    },
    creatorId:{
      type:String  
    }

},{timeStamps:true})

 module.exports = mongoose.model('gemStone',gemStoneSchema)