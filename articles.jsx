import axios from "axios";
import { useState } from "react";

const Articles = function(){
  const [article , setArticle] = useState({})
 
 const handleChange = (e)=>{
    setArticle({...article,[e.target.name]:e.target.value })
 } 
  const handleSubmit = async()=>{
    try { await axios.post('http://localhost:4002/api/blogs', article)
        
    } catch (error) {
      console.log( 'there was an an error',error
      )
        
    }
  }
    return(
      <div>
        <form  >
          <input placeholder="enter the image url here"  name="image" type="text" className="image"onChange={handleChange}/>
          <input placeholder="write your post" name="post" type="text"className="post" onChange={handleChange}/>
          <input placeholder="title to your post" name="title" type="text" className="title"onChange={handleChange}/>
          <input placeholder="description to your post" name="description" type="text" className="description"onChange={handleChange}/>
          <button type="submit"onClick={handleSubmit}>submit</button>
        </form>
           
      </div>

    );

}
export default Articles