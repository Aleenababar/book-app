import React ,{useEffect,useState} from 'react';
import Card from '../Home/Card'
import axios from "axios"

function Pendingtask() {
  const [Data,setData]=useState();
  
  
  const configHeaders ={
    id:localStorage.getItem("id"),authorization: `Bearer ${localStorage.getItem("token")}`
  
  } 
  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:1000/api/v2/get-incomplete-tasks",{
        headers:configHeaders , 
      }
    );
    setData(response.data.data);
     
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

useEffect(() => {
  fetch()
},[]);
  return (
    <div>
<<<<<<< HEAD
   <Card home={"false"} data={Data}  /> 
=======
   {Data &&  <Card home={"false"} data={Data} fetch={fetch}  /> }
>>>>>>> e613817a9124a26f0374cde85f0dc8b605ff8d40
    </div>
  )
}

export default Pendingtask
