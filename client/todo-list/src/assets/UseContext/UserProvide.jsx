// UserProvider.js
import React, { useState } from "react";
import UserContext from "./UserContext.jsx";

const UserProvider = ({ children }) => {
  const [userLogin,setUserLogin]=useState(false);

  return (
    <UserContext.Provider value={{ userLogin, setUserLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
