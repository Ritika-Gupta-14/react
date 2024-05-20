import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoDisplay({todo}) {
    const[isEditable, setIseditable]= useState(false)
    const[msg, setMsg]=useState(todo.message);
   const{deleteTodo,toggleCompleted,updateTodo} =useTodo()


function handleChange(){
   toggleCompleted(todo.id)
}
function cpy(){
 navigator.clipboard.writeText(msg)
}
function handleEdit(){
   if(isEditable){
   updateTodo(todo.id, {...todo,message:msg})}
   setIseditable((prev)=>!prev)
}

   function handleClick(){
    deleteTodo(todo.id)
   }

   if (todo.message=="") return

  return (
    <>
    <div className='flex justify-center items-center w-[100vh]'>
    <div className={`m-2 p-3  rounded-lg ${todo.completed?"bg-green-500":" bg-emerald-950 "}
     ${isEditable?"shadow-sm shadow-white  ":""}  `}>
        <input type='checkbox' checked={todo.completed} onChange={handleChange}></input>



       <input type="text" 
       className={` min-w-[30vw]  ${todo.completed?" bg-green-500 text-black line-through":" text-slate-200 bg-emerald-950"}
         ml-5 p-1 mr-2 w-auto ${isEditable?"outline-white ":"focus:outline-none"}`}
       value={msg} readOnly={!isEditable} onChange={(e)=>{setMsg(e.target.value)}} />




        <button className={`mr-2 text-l ${todo.completed?"":" hover:bg-emerald-700"} `} onClick={handleEdit} disabled={todo.completed}>
          {isEditable?"📁":"✏️"}
          </button>
       <button onClick={handleClick} className= {`${todo.completed?" text-black ":"text-white"} hover:bg-emerald-700`} >
       ❌
          </button>
          <button onClick={cpy} className= {`ml-2 hover:bg-emerald-700`}  >
          ✂️ 
          </button>
    </div>
    </div>
    </>
  )
}

export default TodoDisplay