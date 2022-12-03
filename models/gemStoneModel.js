const mongoose = require('mongoose')

const gemStoneSchema= mongoose.Schema({
     name:{
        type:String,
    },

    title:{
        type:String,
        required:[true,'fullName is required']
    },
     weight:{
        type:String,
        required:[true,'email is required']
    },
     desc:{
        type:String,
        required:[true,'password is required']
    },

    phoneNumber:{
        type:String,
    },
    
    image:{
        type:String,
        required:[true,'profile image is required']
    },
    creatorId:{
      type:String  
    }

},{timeStamps:true})

 module.exports = mongoose.model('gemStone',gemStoneSchema)