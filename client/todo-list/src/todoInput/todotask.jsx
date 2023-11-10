import React, { useState } from 'react'
import { AiOutlineDelete} from 'react-icons/ai';
const Todotask = () => {
  const [Checked, setChecked] = useState(false)
  return (
    <>
    <div className='max-w-[100%] min-h-2/3   flex flex-col  bg-[#0A155A] gap-2 justify-center mt-1 rounded-lg'>
      <div className='flex px-2 py-2 min-w-2/3 max-h-1/2'>
        <input type='checkbox' className='h-5 px-2 py-1 py-2 mt-3 text-xl border-2 border-pink-400 w-7' onChange={() => { setChecked(!Checked) }} />

        <p className={`text-2xl w-fit py-1 px-2 text-slate-200 ${Checked ? 'line-through' : null}`}> form with proper styling using Tailwind CSS.
I removed the extra flex class from the child div since it's not needed in this context.</p> <button className='px-1 py-1 mt-1 rounded-xl'><AiOutlineDelete color={'white'} size={28}/></button>

      </div>
    </div>
    </>
  )
}

export default Todotask;