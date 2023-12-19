import React, { useState ,useContext, useEffect} from 'react'
import { AiOutlineDelete} from 'react-icons/ai';
import axios from 'axios';
import UserContext from '../assets/UseContext/UserContext';
const Todotask = ({task,check}) => {
  const [Checked, setChecked] = useState(check);
  const {CheckStatus,SetCheckStatus} = useContext(UserContext);
  const CheckMark=async()=>{
    const token=localStorage.getItem("token")
    try{
        const resp=axios.post('http://localhost:3001/TaskChecked',{
          check:Checked,
          task:task,
        },{
          headers:{"x-access-token":token}
        })
        if(resp){
          console.log(resp.data)
        }else{
          console.log(resp.data)
        }
    }catch(err){
      console.log(err);
    }
  }   
  const handelCheck=async()=>{
    setChecked(!Checked);
    SetCheckStatus(!CheckStatus)
    //setReloade(!Realoade);
   
  }
  useEffect(()=>{
    CheckMark();
  },[Checked,task])
  //problem is check box not render as per condition
  return (
    <>
    <div className='max-w-[100%] min-h-2/3   flex flex-col  bg-[#0A155A] gap-2 justify-center mt-1 rounded-lg'>
      <div className='flex px-2 py-2 min-w-2/3 max-h-1/2'>
        <input type='checkbox' className='h-5 px-2 py-1 py-2 mt-3 text-xl border-2 border-pink-400 w-7'
        checked={check} 
        onChange={()=>{handelCheck() }} />

        <p className={`text-2xl w-fit py-1 px-2 text-slate-200 w-full `}> {task}</p> <button className='px-1 py-1 mt-1 rounded-xl'><AiOutlineDelete color={'white'} size={28}/></button>
        
        
      </div>
    </div>
    </>
  )
 
}

export default Todotask;