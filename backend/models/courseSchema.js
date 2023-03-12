const mongoose = require('mongoose');
const {Schema} = mongoose ;

const courseSchema = new Schema({
    img :{
        type : String,
        required : true,
    },
    name :{
        type : String,
        required : true,
    },
    description :{
        type : String,
        required : true,
    },
    category :{
        type: String,
        required: true,
    },
    rating:{
        type : String,
    },
})

module.exports = mongoose.model('course',courseSchema)