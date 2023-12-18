import React, { useContext, useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../UseContext/UserContext";
import { Loader } from "../loader/Loader";
const Login = () => {
  const Navigate = useNavigate();
  const { userLogin, setUserLogin,Loading,LoadingTime} = useContext(UserContext);
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });
  axios.defaults.withCredentials = true;
  const loginUser = async () => {
    try {
      const resp = await axios.post("http://localhost:3001/Login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });
      console.log(resp.data);
      
      if (!resp.data.auth) {
        console.log(resp.data.auth);
        if (resp.data.error_msg === "wrong password" ||"no user found") {
          setInputError({ password: resp.data.error_msg });
        } else {
          if(resp.data.error_msg === "wrong email")setInputError({ email: resp.data.error_msg });
          
        }
        //setUserLogin(false);
        Navigate("/");
      } else if(resp.data.auth) {
        localStorage.setItem("token", resp.data.token); //here set or kept token into localstorage
        setUserLogin(true);
        Navigate("/Home");
    
      }
      else{
        console.log({err:'wrong input'})
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Emptyspan = () => {
    setInputError({
      email: "",
      password: "",
    });
  };
  useEffect(()=>{
    LoadingTime(3000);
  },[])
  return (
    <div className="w-full min-h-screen bg-[#3D47AF] flex  item-center justify-center">
       {Loading?
          (<><div className="md:h-screen">

            <Loader/>
          </div></>)
          :(<>
      <div className="py2 px-5 w-[80%] lg:w-[30%] h-fit lg:min-h-[40vh] bg-[#0A155A] md:px-2 md:py-5  flex flex-col  items-center justify-center self-center  gap-2 rounded-lg">
        <div className="flex flex-col ">
          <p className="py-1 text-xl text-slate-200">Useremail ID</p>
         
          <input
            type="email"
            className="px-2 py-1 text-lg rounded outline-none bg-slate-500 text-slate-200"
            onChange={(e) => {
              setloginInfo({ ...loginInfo, email: e.target.value });
            }}
            onFocus={Emptyspan}
          
          />

          {inputError.email != "" ? (
            <>
              <span className="text-red-500 font-semibold text-sm py-1">
                Wrong email ID
              </span>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col">
          <p className="py-1 text-xl text-slate-200">Password</p>
          {}
          <input
            type="password"
            className="px-2 py-1 text-lg rounded outline-none bg-slate-500 text-slate-200"
            onChange={(e) => {
              setloginInfo({ ...loginInfo, password: e.target.value });
            }}
            onFocus={Emptyspan}
            required={true}
          />
          {inputError.password != "" ? (
            <>
              <span className="text-red-500 font-semibold text-sm py-1">
                Wrong Password
              </span>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex  flex-col min-w-[74%] lg:min-w-[45%]">
          <button
            className="flex mt-7 items-center justify-center w-full px-1 py-1 mt-2 text-lg font-semibold text-center bg-pink-500 rounded hover:bg-pink-600 text-slate-200"
            onClick={loginUser}
          >
            <FiLogIn color={"white"} size={25} />
            Log In
          </button>
          <p className="text-lg text-center text-slate-200 py-2">
            Do you want{" "}
            <Link to="/SignUp" className="text-pink-200 hover:text-pink-600">
              Sign Up?
            </Link>
          </p>
        </div>
      </div></>)}
    </div>
  )
};

export default Login;
