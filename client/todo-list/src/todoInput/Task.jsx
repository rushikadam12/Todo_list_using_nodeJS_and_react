import React, { useContext, useEffect, useState } from "react";
import Todotask from "./todotask";
import axios from "axios";
import UserContext from "../assets/UseContext/UserContext";
const Task = () => {
  const [userTask, setUserTask] = useState([]);
  const {CheckStatus,isadd,isDelete} = useContext(UserContext)
  const fetchUserTask = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.get("http://localhost:3001/getuserTask", {
        headers: { "x-access-token": token },
      });
      if (resp.data) {
    
        console.log(resp.data)
        
        const data=await resp.data;
        setUserTask(data);
       
      }
      //console.log(userTask);
    } catch (err) {
      res.send(err);
    }
  };

  




  useEffect(() => {
   
      fetchUserTask();
    

 
   //setReloade(!Reloade)
  }, [CheckStatus,isadd,isDelete]);
  return (
    <>
      <div className="flex self-center justify-center w-full min-h-screen px-5 lg:w-2/3">
        <div className="">
          <p className="px-2 py-2 text-xl text-slate-200">TODAY'S TASKS</p>
          {userTask.length==0?(<p className="text-red-500 text-xl">No data</p>):(
          userTask.map((item, index) => {
            return (
              <>
                <Todotask key={index} name={item.name} task={item.task} check={item.complete} />
              </>
            );
            }))}
        </div>
      </div>
    </>
  );
};

export default Task;
