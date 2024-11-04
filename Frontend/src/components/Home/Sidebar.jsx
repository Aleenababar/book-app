import React from 'react';
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { GrInProgress } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
// import axios from 'axios';
function Sidebar() {
  const dispatch =useDispatch();
  const history =useNavigate();

  const data=[
    {title:"All tasks", icon: <CgNotes />,
      link: "/",
},
{
  title:"Completed tasks", icon: 
  <FaCheckDouble />,   link: "/completedtask",
},
{
  title:"Important tasks",
  icon: <MdLabelImportant />,  link: "/importanttask",
},
{
  title:"In Progress tasks",icon: <GrInProgress />,  link: "/inprogresstask",
}
,{
  title:"Incompleted tasks",
  icon: <TbNotebookOff /> , link: "/incompletedtask"
}






];
// const [Data,setData]=useState();
const logout=()=>{

  dispatch(authActions.logout());
  localStorage.clear("id");
  localStorage.clear("token");
  history("/signup");

}
// const configHeaders ={
//   Id:localStorage.getItem("id"),Authorization: `Bearer ${localStorage.getItem("token")}`

// }

  return (
 <>
    <div>

<h2 className='text-xl font-semibold'>Task Management</h2>
<h4 className='text-gray-400 mb-1'>aleenanasir05@gmail.com</h4>
<hr />
</div> 
      <div className='my-2'>
        {
          data.map((items,i)=>(
              <Link  to={items.link} key={i} className='flex my-2 items-center hover:bg-gray-600 p-2 rounded transition-all duration-300'>
                {items.icon} &nbsp; {items.title}
              </Link>

          )
          )
        }
      </div>
      <div className='my-2 bg-gray-600 w-full p-2 rounded text-center'>
        <button onClick={logout}>Log out</button>
      </div>

      
      
      
    </>
  )
}

export default Sidebar;
