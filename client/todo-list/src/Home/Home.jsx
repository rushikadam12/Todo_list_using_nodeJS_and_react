import React from 'react'
import Task from '../todoInput/Task';
import { CiEdit } from 'react-icons/ci'
const Home = () => {
  return (
    <>
      <div>
        <div className=' bg-[#3D47AF] px-2 py-2'>
          <p className='text-5xl text-start text-slate-200'>What's Up!</p></div>
        <div className='w-full min-h-[100vh] border-2  flex justify-center item-center flex-col py-2' style={{ background: '#3D47AF' }}>


          <div className='flex self-center px-2 py-2 border-none outline-none md:w-2/6 h-fit'>
            <input className='text-slate-200 self-start w-full px-2 py-2  rounded-l-lg outline-none text-xl  font-semibold bg-[#0A155A]' placeholder="What's in your mind today" />
            <button className='py-1 px-1 bg-[#0A155A] rounded-r-lg'><CiEdit size={35} color={'white'} /></button>

          </div>
          <Task />


        </div>

      </div>
    </>
  )
}

export default Home;