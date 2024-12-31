import React from 'react'
import tickicon from '../assets/tick.png'
import deleteicon from '../assets/delete-icon.png'
import nottick from '../assets/not_tick.png'
const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img className='h-12 w-7' src={isComplete?tickicon:nottick} alt=''/>
        <p className={`tex-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete? "line-through" : ""}`}>{text}</p>
      </div>


      <img onClick={()=>{deleteTodo(id)}} src={deleteicon} alt='' className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default TodoItems
