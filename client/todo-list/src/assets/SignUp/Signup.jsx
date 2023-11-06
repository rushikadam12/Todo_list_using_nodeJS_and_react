import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import SignImg from './SignupImg';
const Signup = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen bg-[#0A155A]'>
            <div className="w-[50%] min-h-[50%] bg-slate-700 flex justify-center items-start flex-col gap-5 rounded-lg bg-[url(./5165306.)]">
           
            
                    <div className='self-end px-5 '>
                        <p className='py-2 text-slate-200 outline-none font-medium flex content-between'>Email ID<AiOutlineUser size={22} /></p>
                        <input placeholder='Enter your email' className=' outline-none px-2 py-1 rounded'></input>
                    </div>
                    <div className='self-end px-5 '>
                        <p className='py-2 text-slate-200 font-medium'>User Name</p>
                        <input placeholder='Enter your Name ' className='outline-none px-2 py-1 rounded' />
                    </div>
                    <div className='self-end px-5 '>
                        <p className='py-2 text-slate-200 font-medium flex content-between'>Password <RiLockPasswordLine size={22} color={'white'} /></p>
                        <input placeholder='Enter your Password ' className='outline-none px-2 py-1 rounded' />
                    </div>
               
            </div>
        </div>
    )
}

export default Signup