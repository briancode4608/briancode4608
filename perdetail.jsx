import { useState } from "react";
import axios from "axios";
const url = ''

function Details (){

   const [name , setName]=useState('')
   const [age , setAge]=useState('')
   const [email , setEmail]=useState('')
   const [phone , setPhone]=useState('')

   const handleSubmit  = async (e)=>{
    e.preventDefault();
    try { 
        const res = await axios.post(url, {name ,age, email,phone})
        console.log(res)
    
    } catch (error) {
        console.log(error.response )
    }

   }

  /*  const [personal , setPersonal]  = useState({name:'mat', age:'40'})
    const [responsee, setResponsee] = useState(null)

    const handleChange =  (e)=>{
        setPersonal({...personal,[e.target.name]: e.target.value})
        }

        const handleSubmit = async (e)=> {
            e.preventDefault();
            try { const res = await axios .post('http://localhost:4000/createUsers',personal)
                setResponsee(res.data)
                
            } catch (error) {
                console.error(error.response)
                
            }
        }*/
  // the onchange methods us are not clear 
    return(
   <div>
    <form action="" method="post" onSubmit={handleSubmit}>
        <input type="text"placeholder="name" />
        <input type="text" placeholder="age"/>
        <input type="text"placeholder="phone" />
        <input type="text"placeholder="email" />
        <button onSubmit={}></button>
    </form>
   </div>

    );
}

export default Details