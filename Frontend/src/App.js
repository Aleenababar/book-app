import React, { useEffect } from "react";
import { Routes, Route,useNavigate} from "react-router-dom";
import Home from "./components/pages/Home";
import Alltask from "./components/pages/Alltask";
import Importanttask from "./components/pages/Importanttask";
import Completedtask from "./components/pages/Completedtask";
import Incompletedtask from "./components/pages/Incompletedtask";
import Inprogresstask from "./components/pages/Inprogresstask";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch=useDispatch();
  useEffect(() => {
    if(localStorage.getItem("id")&& localStorage.getItem("token")){
      dispatch(authActions.login());
    }
    else if (isLoggedIn === false) {
      navigate("/signup");
    }
    // eslint-disable-next-line
  },[]);

  return (
    <div className="p-2 bg-gray-900 text-white h-screen relative">
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<Alltask />} />
          <Route exact path="/importanttask" element={<Importanttask />} />
          <Route exact path="/completedtask" element={<Completedtask />} />
          <Route exact path="/incompletedtask" element={<Incompletedtask />} />
          <Route exact path="/inprogresstask" element={<Inprogresstask />} />
        </Route>

        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;