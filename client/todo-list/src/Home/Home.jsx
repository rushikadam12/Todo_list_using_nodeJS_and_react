import React, { useContext, useEffect, useState } from 'react'
import Task from '../todoInput/Task';
import { CiEdit } from 'react-icons/ci'
import UserContext from '../assets/UseContext/UserContext'
//import { jwtDecode } from "jwt-decode";
import axios from 'axios'

const Home = () => {
  const [UserData,setUserData]=useState([]);
  const {userLogin, setUserLogin} = useContext(UserContext)
  const [userTask,setuserTask]=useState("");
  const FetchUserData=async()=>{
    try{
        const token=localStorage.getItem("token")
        
        if(token){
          const resp=await axios.get('http://localhost:3001/UserInfo',{
            headers:{"x-access-token":token}
          })
          if(resp.data){
            console.log(resp.data);
            setUserData(resp.data.user)
          }else{
            console.log("No user found")
          }
          
          
        }else{
          console.log('not token found')
          setUserLogin(false)
        }
    }catch(err){
      console.log({err:'wrong something'});
    }
  }

  const addTask=async()=>{
    try{
    const token=localStorage.getItem("token")
    const result=await axios.post('http://localhost:3001/userTask',{
      name:UserData.name,
      task:userTask,
    },
    {
      headers:{"x-access-token":token}
    })
    if(result){
      console.log(await result)
    }else{
      console.log({'Error':'Data is not added from frontend'})
    }
  }catch(err){
      console.log(err);

    }
  }




  useEffect(()=>{
    
    FetchUserData();
  },[])
  return (
    <>
      <div>
        <div className=' bg-[#3D47AF] px-2 py-2'>
          <p className='text-5xl text-start text-slate-200'>{UserData.name} What's Up!</p></div>
        <div className='w-full min-h-[100vh] border-2  flex justify-center item-center flex-col py-2' style={{ background: '#3D47AF' }}>


          <div className='flex self-center px-2 py-2 border-none outline-none md:w-2/6 h-fit'>
            <input className='text-slate-200 self-start w-full px-2 py-2  rounded-l-lg outline-none text-xl  font-semibold bg-[#0A155A]' placeholder="What's in your mind today" 
            onChange={(e)=>{setuserTask(e.target.value)}} />
            <button className='py-1 px-1 bg-[#0A155A] rounded-r-lg' onClick={addTask}><CiEdit size={35} color={'white'} /></button>

          </div>
          <Task />


        </div>

      </div>
    </>
  )
}

export default Home;