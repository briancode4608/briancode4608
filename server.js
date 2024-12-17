const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// models
const blogModel = require('./models/blogs')
const userModel = require('./models/users')

//instantiate use
const app = express()
app.use(cors())
app.use(express.json())

const port = 4002;

const dbUri = "mongodb://127.0.0.1:27017/clients"

mongoose.connect(dbUri)

app.listen(port , ()=>{
  console.log('server is online')

})

// end point API's

app.post("/api/blogs" , (req , res)=> {
    const blogs = req.body

    const newBlog = new blogModel(blogs)
    newBlog.save()
    res.json(blogs)
    console.log(blogs)
})