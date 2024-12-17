const { text } = require('express')
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    Image : {
        type : String ,
        

    },
    
    post:{
        type: String,
        required : true

    },

    title:{ 
        type: String,
    

    },
    descreption :{
        type :String,
        

    }

})

const blogModel = mongoose.model('blogs' , blogSchema)

module.exports= blogModel;