const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email: {
        type : String,
    },
    service : {
        type: String,
    },
    phone : {
        type : Number,
        required : true
    }})

const userModel = mongoose.model('user' , userSchema)
module.exports = userModel;
