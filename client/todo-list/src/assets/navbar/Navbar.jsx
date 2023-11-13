import React, { useState ,useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { PiSignInBold } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
//import Login from "../loginpage/Login";
import UserContext from "../UseContext/UserContext";

const Navbar = () => {
  const Navigate=useNavigate()
  const [Checklogin,setChecklogin]=useState(false);
  const {userLogin, setUserLogin} = useContext(UserContext)
  
  const [isopen, setIsopen] = useState(false);
  const CheckToggle = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <div className="w-full h-[4rem] py-2 px-2 bg-[#010319] ">
        <div className="flex justify-end items-end justify-between self-center">
          <h1 className="text-slate-200 text-xl md:text-4xl w-fit text-justify self-center">
            Checklistify ✅
          </h1>

          <button className=" min:w-12 md:w-13 px-2 py-2  rounded-xl hover:bg-slate-300 self-end">
            {!isopen ? (
              <FiAlignJustify size={32} color="white" onClick={CheckToggle} />
            ) : (
              <AiOutlineClose size={32} color="white" onClick={CheckToggle} />
            )}
          </button>
        </div>

        <nav
          className={`flex items-end justify-end py-2   
          ${
            isopen ? "display" : "hidden"
          }`}
        >
          <ul
            className="flex flex-col text-2xl p-5 px-8 w-fit rounded-xl self-end shadow-3xl h-fit transition:2s-ease-in relative z-2 ml-4"
            style={{ background: "#4F74FF" }}
          >
            <li className="py-2 ">
              <Link to="/" className="flex flex-row hover:text-slate-300">
                <AiOutlineHome size={30} />
                User_Info
              </Link>
            </li>
             <li className="py-2 ">
              <Link to={userLogin?"/Home":"/Login"} className="flex flex-row hover:text-slate-300">
                <AiOutlineHome size={30} />
                Home
              </Link>
            </li>
            
            <li className="py-2">
              <Link className="flex flex-row hover:text-slate-300 ">
                <FiInfo size={30} />
                About
              </Link>
            </li>
            <li className="py-2">
              <Link className="flex flex-row hover:text-slate-300 " to="/SignUp">
                <PiSignInBold size={32} />
                SignUp
              </Link>
            </li>
           <li className="py-2" onClick={()=>{localStorage.clear(),Navigate('/'),setUserLogin(false)}}>
              <Link className="flex flex-row hover:text-slate-300">
                <FiLogOut size={29} />
                LogOut
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
