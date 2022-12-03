const mongoose= require('mongoose')

const connectDb = async()=>{
    try {
       await mongoose.connect('mongodb+srv://Namoel:namoel12345@ethiogemstone.g2uxltx.mongodb.net/?retryWrites=true&w=majority')
        console.log('the Db is connected');
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDb