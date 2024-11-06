import React  from "react";
import { IoCreateSharp } from "react-icons/io5";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";

const Card = ({ home, setInputDiv,data ,fetch}) => {

  const configHeaders ={
    Id:localStorage.getItem("id"),authorization: `Bearer ${localStorage.getItem("token")}`
  
  } 
  // Ensures data is an array with default value of an empty array in case it's undefined
  const handleCompleteTask = async (id) =>{
    try {
      const response= await axios.put(`http://localhost:1000/api/v2/update-complete-task/${id}`
        ,{},
        { headers:configHeaders });

        if(response?.data?.message){
          fetch()
          alert(response?.data?.message)
        }      
    } catch (error) {
      console.log(error);
      
    }
  }
  const handleImportant = async (id) =>{
    try {
      const response= await axios.put(`http://localhost:1000/api/v2/update-imp-task/${id}`,
        {},
        { headers:configHeaders });
      if(response?.data?.message){
        fetch()
        alert(response?.data?.message)
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const deleteTask = async (id) =>{
    try {
      const response= await axios.delete(`http://localhost:1000/api/v2/delete-task/${id}`,
        { headers:configHeaders });
        if(response?.data?.message){
          fetch()
          alert(response?.data?.message)
        }
      
    } catch (error) {
      console.log(error);
      
    }
  }
   
  return (
    <div className="grid grid-cols-3 gap-4 p-4 ">
      {data?.length>0 &&
        data.map((items, i) => (
          <div
            key={i} // Add a key prop here
            className="flex flex-col justify-between bg-gray-800 rounded-sm p-4"
          >
            <div>
              <h3 className="text-xl font-semibold ">{items?.title}</h3>
              <p className="text-gray-400">{items?.desc}</p>
              <p>{items?.due_date}</p>
            </div>

            <div className="mt-4 items-center w-full flex justify-around text-xl">
              <button
                className={`${
                  items?.complete === false ? "bg-green-500" : "bg-red-600"
                } rounded p-2 w-3/6`} onClick={()=>handleCompleteTask(items?._id)}
              >
                {items?.complete === true ? "Completed" : "In Complete"}
              </button>
              <div className="p-2 text-white w-3/6 text-2xl flex justify-around font-semibold">
                <button onClick={()=>handleImportant(items._id)}>
                  {items?.important === false ? <IoCreateSharp /> : <FaRegEdit  className="text-pink-500"/>}
                  
                </button>
                <button>
                  <MdOutlineLibraryAdd />
                </button>
                <button>
                  <MdOutlineSystemUpdateAlt />
                </button>
                <button onClick={()=>deleteTask(items?._id)}> 
                  <RiDeleteBinFill />
                </button>
              </div>
            </div>
          </div>
        ))}

      {home === "true" && (
        <button
          className="bg-gray-800 rounded-sm p-4 flex flex-col justify-center items-center text-gray-300 hover:scale-105 hover:cursor-pointer"
          onClick={() => setInputDiv("fixed")}
        >
          <IoAddCircleOutline className="text-6xl" />
          <h2 className="font-semibold text-2xl mt-4 justify-around">
            Add More Task
          </h2>
        </button>
      )}
    </div>
  );
};

export default Card;
