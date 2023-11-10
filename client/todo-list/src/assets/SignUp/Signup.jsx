import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
const Signup = () => {
    const navigate=useNavigate();
    const [fillform,setfilForm]=useState({
        name:"",
        email:"",
        password:"",
    });
    const [checkSignIn,setSignIn]=useState(false);
    const submitForm=async()=>{
        try{
        const resp=await axios.post('http://localhost:3001/SignUp',{
            username:fillform.name,
            email:fillform.email,
            password:fillform.password,
            })
            if(await resp.data.msg==="data is added"){
                window.alert(resp.data.msg);
                setSignIn(true);
            }
            
        }catch(err){
            window.alert(err);
            console.log({err:err});
        }
    }
  
  return (
    <>
      <form className="flex items-center justify-center w-full min-h-screen bg-[#0A155A]" action={checkSignIn?navigate("/Login"):null}>
        <div className="min-w-[25%] min-h-[50%] bg-slate-700 flex justify-center items-center flex-col gap-5 rounded-lg  py-5">
          <h1 className="text-slate-200 text-xl font-semibold">SignUp</h1>
          <div className="self-center  ">
            <p className="flex py-2 text-slate-200 outline-none font-medium  content-between">
              Email ID
              <AiOutlineUser size={22} />
            </p>
            <input
              placeholder="Enter your email"
              className=" outline-none px-2 py-1 rounded font-semibold"
              type="email"
              onChange={(e)=>{setfilForm({...fillform,email:e.target.value})}}
            ></input>
          </div>
          <div className="self-center ">
            <p className="py-2 text-slate-200 font-medium">User Name</p>
            <input
              placeholder="Enter your Name "
              className="outline-none px-2 py-1 rounded font-semibold"
              onChange={(e)=>{setfilForm({...fillform,name:e.target.value})}}
              type="text"
            />
          </div>
          <div className="self-center  ">
            <p className="py-2 text-slate-200 font-medium flex content-between">
              Password <RiLockPasswordLine size={22} color={"white"} />
            </p>
            <input
              placeholder="Enter your Password "
              className="outline-none px-2 py-1 rounded font-semibold"
              type="password"
              onChange={(e)=>{setfilForm({...fillform,password:e.target.value})}}
              autoComplete="true"
            />
          </div>
          <div className="self-center px-5 py-5">
            <button className=" min-w-[55%] px-20 bg-slate-200 rounded-md py-2 hover:bg-slate-400 font-medium" 
            onClick={submitForm}>
              SignUp
            </button>
            
          </div>
          <p className='text-lg text-slate-200'>Do you want <Link to="/Login" className='text-pink-400 hover:text-pink-600'> Login?</Link></p>
        </div>
      </form>
    </>
  );
};

export default Signup;
