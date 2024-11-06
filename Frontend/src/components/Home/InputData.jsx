import axios from 'axios';
import React, { useState } from 'react';


import { GiCrossedBones } from "react-icons/gi";

function InputData({InputDiv,setInputDiv,fetch}) {
  const [state,setState]=useState({
    title:'',
    desc:''
  })
    const handleCreate=async()=>{
      try {
        if(!state.title||!state.desc){
          alert('Please enter title and description')
          return;
        }
        const configHeaders ={
          Id:localStorage.getItem("id"),authorization: `Bearer ${localStorage.getItem("token")}`
        
        } 
        const response=await axios.post('http://localhost:1000/api/v2/create-task',state,{headers:configHeaders});
        if(response?.data?.message){
          fetch()
          setInputDiv('hidden')
          alert(response?.data?.message)
        }
      } catch (error) {
        console.log(error,'error')
      }
    }
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setState((prev)=>({...prev,[name]:value}))
    }
  return (
    <>
    <div className={`${InputDiv} top-0 left-0 bg-gray-900 opacity-50 h-screen w-full`}>
    </div>
    <div className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}> 
    
        <div className='w-3/6 bg-gray-800 p-4 rounded   justify-end'>
        <div className='flex justify-end text-2xl'><button onClick={()=>{setInputDiv('hidden')}}><GiCrossedBones /></button></div>
        <input  type="text" placeholder='Title' name='title' onChange={handleChange} className='px-3 py-2  my-3 rounded w-full bg-slate-600' />
        <textarea name="desc" placeholder='Description' onChange={handleChange} cols="30" rows="10"className='px-3 py-2  my-3 rounded w-full bg-slate-600 my-3' style={{ resize: 'none' }}  ></textarea>
        <button  className='px-3 py-2 bg-blue-400 rounded text-2xl text-black font-semibold' onClick={handleCreate}>Submit</button>
        </div>
    </div>
    
    </>
  )
}

export default InputData
