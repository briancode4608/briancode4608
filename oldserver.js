//importing packages and modules
const express = require('express')
const mongoose = require ('mongoose')
const  cors =  require ('cors')
const userModel = require ('./models/users.js')
const blogModel = require('./models/blogs.js')

// using 
const app = express();
const PORT = 4001;
app.use(cors())
app.use(express.json())
const uri = "mongodb://127.0.0.1:27017/clients"
mongoose.connect(uri)


/*
//USERS
//get
app.get('/getUsers',async (req , res )=>{
    try { await userModel.find({}).then((user)=>
    {res.json(user)})
        
    } catch (error) {
        res.status(500).json ({error: 'inernal server error'})
        console.log("there is a problem")
        
    }
 
})

// this is a post route

app.post('/createUsers',  (req , res) => {
     const user = req.body

    const newUser = new userModel(user)
    newUser.save()
     res.send(user)
     
        
    }
)
*/

//BLOGS
//get
/*app.get('/getBlogs',async (req , res )=>{
    try { await blogModel.find({}).then((user)=>
    {res.json(user)})
        
    } catch (error) {
        res.status(500).json ({error: 'inernal server error'})
        console.log("there is a problem")
        
    }
 
})*/


//post route/ endpoint


app.post('/updateBlogs',  (req , res) => {
    const blog = req.body

   const newBlog = new blogModel(blog)
   newBlog.save()
    res.send(blog)
    
       
   }
)
app.listen(PORT , ()=>{
    console.log('the server is working')
    
    })

