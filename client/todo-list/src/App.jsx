import React, { useState ,useEffect, useContext} from "react";
import UserContext from "./assets/UseContext/UserContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,

  Navigate,
} from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./assets/navbar/Navbar";
import Login from "./assets/loginpage/Login";
import Signup from "./assets/SignUp/Signup";
import axios from "axios";
function App() {
  const {userLogin, setUserLogin} = useContext(UserContext)
 
  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const resp = await axios.get("http://localhost:3001/CheckUser", {
          headers: { "x-access-token": localStorage.getItem("token") }, // inside header we kept the toke so here we checking if token is in the header or not
        });

        if (resp.data.msg==="your are authenticated") {
          console.log("User already logged in");
          setUserLogin(true);
          console.log(userLogin);
         
         
        } else {
          setUserLogin(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkUserLogin();
  }, [userLogin]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
       
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/" element={<Login />} />
          {userLogin ? (
            
              <Route path="/Home" element={userLogin?<Home />:<Login/>} />
          
          ) : (
            
            <Route path="/Login" element={<Login />} />
            
          )}
          <Route path="/*" element={<h1 className="text-2xl text-center">404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
