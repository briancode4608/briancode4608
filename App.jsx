//import { useState , useEffect } from "react";
//import Details from "./perdetail";
import Articles from "./articles";


function App (){
 /* const [users ,setUser] = useState(null);
  
  async function fetchData(){
    try {
       const response = await fetch('http://localhost:4000/getUsers')
       if(!response.ok){
        console.log('there was an error')
       }
        const data =await response.json()
       setUser(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  useEffect (()=>{
    fetchData()
  } ,[])

 console.log (users)
 //write a post request
 
 //write a put request


//write a delete request


 
*/
 
 
  return(
 <div>
  <Articles/>

  </div>
  )
  };
export default App
