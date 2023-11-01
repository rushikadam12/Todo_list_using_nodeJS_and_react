import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='w-full h-[4rem] bg-slate-800'>
           <div className='flex justify-end items-end'>
                <nav className='flex bg-emerald-500 text-xl justify-end items-end h-[8rem] py-2 px-1 px-[2rem]'>
                    <ul className='flex flex-col justify-center items-center'>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Log_in</Link>
                    </ul>
                </nav>
                </div>
        </div>
    )
}

export default Navbar;