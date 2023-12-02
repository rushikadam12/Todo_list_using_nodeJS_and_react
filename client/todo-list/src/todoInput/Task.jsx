import React, { useEffect, useState } from "react";
import Todotask from "./todotask";
import axios from "axios";
const Task = () => {
  const [userTask, setUserTask] = useState([]);
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
  }, []);
  return (
    <>
      <div className="flex self-center justify-center w-full min-h-screen px-5 lg:w-2/3">
        <div className="">
          <p className="px-2 py-2 text-xl text-slate-200">TODAY'S TASKS</p>
          {userTask.map((item, index) => {
            return (
              <>
                <Todotask key={index} name={item.name} task={item.task} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Task;
