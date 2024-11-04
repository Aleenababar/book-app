import React from 'react';


import { GiCrossedBones } from "react-icons/gi";

function InputData({InputDiv}) {
    
  return (
    <>
    <div className={`${InputDiv} top-0 left-0 bg-gray-900 opacity-50 h-screen w-full`}>
    </div>
    <div className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}> 
    
        <div className='w-3/6 bg-gray-800 p-4 rounded   justify-end'>
        <div className='flex justify-end text-2xl'><button><GiCrossedBones /></button></div>
        <input type="text" placeholder='Title' name='title' className='px-3 py-2  my-3 rounded w-full bg-slate-600' />
        <textarea name="desc" placeholder='Description' cols="30" rows="10"className='px-3 py-2  my-3 rounded w-full bg-slate-600 my-3' ></textarea>
        <button  className='px-3 py-2 bg-blue-400 rounded text-2xl text-black font-semibold'>Submit</button>
        </div>
    </div>
    
    </>
  )
}

export default InputData
