import React from "react";
import { IoCreateSharp } from "react-icons/io5";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";

const Card = ({home,setInputDiv, data}) => {
 
  //   const [importantButton,setImportantButton]=useState("In Complete");

  return (
    <div className="grid grid-cols-3 gap-4 p-4 ">
      {data &&
        data.map((items, i) => (
          <div
            className="flex flex-col justify-between
       bg-gray-800 rounded-sm p-4 "
          >
            <div>
              <h3 className="text-xl font-semibold ">{items.title}</h3>
              <p className="text-gray-400  ">{items.description}</p>
              <p>{items.due_date}</p>
            </div>

            <div className="mt-4 items-center w-full flex justify-around text-xl">
              <button
                className={`${
                  items.complete === false
                    ? " bg-red-500"
                    : "bg-green-600"
                } rounded p-2 w-3/6`}
              >
                {items.complete === true? "Completed" :"In Complete"}
              </button>
              <div
                className=" p-2 text-white w-3/6 text-2xl
            flex justify-around font-semibold"
              >
                <button>
                  <IoCreateSharp />
                </button>
                <button>
                  <MdOutlineLibraryAdd />
                </button>
                <button>
                  <MdOutlineSystemUpdateAlt />
                </button>
                <button>
                  <RiDeleteBinFill />
                </button>
              </div>
            </div>
          </div>
        ))}

      {home === "true" && (
        <button className="  bg-gray-800 rounded-sm p-4 flex flex-col justify-center items-center  text-gray-300 hover:scale-105 hover:cursor-pointer" onClick={()=>setInputDiv("fixed")}>
          <IoAddCircleOutline className="text-6xl" />
          <h2 className="font-semibold text-2xl mt-4 justify-around ">
            Add More Task
          </h2>
        </button>
      )
    }
      
    </div>
  );
};

export default Card;
