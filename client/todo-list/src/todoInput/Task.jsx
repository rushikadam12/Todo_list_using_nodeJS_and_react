import React from 'react'
import Todotask from './todotask';
const Task = () => {
  return (
    <>
    <div className='flex self-center justify-center w-full min-h-screen px-5 lg:w-2/3'>
   
        <div className=''>
        <p className='px-2 py-2 text-xl text-slate-200'>TODAY'S TASKS</p>
        <Todotask/>
        <Todotask/>
        <Todotask/>

        <Todotask/>
        <Todotask/>
        <Todotask/>
        
        </div>
    </div>
    </>
  )
}

export default Task;