// UserProvider.js
import React, { useState } from "react";
import UserContext from "./UserContext.jsx";

const UserProvider = ({ children }) => {
  const [userLogin,setUserLogin]=useState(false);
  const [Loading,setLoading]=useState(false);
  const [CheckStatus,SetCheckStatus]=useState(false);
  const [isDelete,setisDelete]=useState(false);
  const [isadd,setisadd]=useState(false)
  const LoadingTime=(Time)=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },Time)
    
  }
  return (
    <UserContext.Provider value={{ userLogin, setUserLogin ,Loading,setLoading,LoadingTime,CheckStatus,SetCheckStatus,isDelete,setisDelete,isadd,setisadd}}>
      {children}
    </UserContext.Provider>
  );
};


export default UserProvider;
