const mongoose = require('mongoose');
const {Schema} = mongoose ;

const courseCategorySchema = new Schema({
   category:{
        type: String,
        required : true,
   },
})

module.exports = mongoose.model('courseCat',courseCategorySchema)