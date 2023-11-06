import React from 'react'
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='w-full min-h-screen bg-[#3D47AF] flex  item-center justify-center'>
        <div className='py-5 px 5 w-[80%] lg:w-[30%] h-fit lg:min-h-[40vh] bg-[#0A155A] md:px-2 md:py-5  flex flex-col  items-center justify-center self-center gap-5 rounded'>
            <div className='flex flex-col '>
                <p className='py-1 text-xl text-slate-200'>Useremail ID</p>
                <input type="email" className='px-2 py-1 text-lg rounded outline-none bg-slate-500 text-slate-200'/>
            </div>
            <div className='flex flex-col'> 
                <p className='py-1 text-xl text-slate-200'>Password</p>
                <input type="Password" className='px-2 py-1 text-lg rounded outline-none bg-slate-500 text-slate-200'/>
            </div>
            <button  className='flex items-center justify-center w-1/2 px-1 py-1 mt-2 text-lg font-semibold text-center bg-pink-500 rounded text-slate-200'><FiLogIn color={'white'} size={25}/>Log In</button>
            <p className='text-lg text-slate-200'>Do you want <Link to="/Signup" className='text-pink-200'>Sign Up?</Link></p>
        </div>

    </div>
  )
}

export default Login