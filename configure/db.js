const mongoose= require('mongoose')

const connectDb = async(req,res)=>{
  
    try {
       await mongoose.connect(process.env.MONGO_URL)
        console.log('the Db is connected');
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDb