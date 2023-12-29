const mongoose = require('mongoose')

const sellerSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,'fullName is required']
    },
     email:{
        type:String,
        required:[true,'email is required']
    },
     password:{
        type:String,
        required:[true,'password is required']
    },

     confirmPassword:{
        type:String,
        required:[true,'confirmation of password is required']
    },

    phoneNumber:{
        type:String,
        required:[true,'phone number is required']
    },
    
    profileImage:{
        type:String,
      
    },
    userType:{
        type:String,
        
    }

})

 module.exports = mongoose.model('user',sellerSchema)