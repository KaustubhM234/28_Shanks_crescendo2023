const mongoose = require('mongoose')
const URI = 'mongodb+srv://kau234:vrOtIR5MFSlEJNru@cluster0.xpru62q.mongodb.net/website?retryWrites=true&w=majority'

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(URI)

        console.log(`MongoDB connected: `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }    
}

module.exports = connectDB