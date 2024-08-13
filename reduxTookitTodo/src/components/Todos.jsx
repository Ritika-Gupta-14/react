import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo,setUpdateId,setUpdating,valChg } from '../features/todo/todoSlice'

function Todos() {
  
    const todos= useSelector(state=>state.todos)
    const dispatch= useDispatch()
    const handleUpdation=(todo)=>{
      dispatch(setUpdating())
      dispatch(setUpdateId(todo.id))
      dispatch(valChg(todo.text))
    }

  return (
    <>
    {todos.map((todo)=>(
    <li key={todo.id} className="w-auto m-2 rounded-lg flex justify-between p-2 items-center bg-slate-950 text-white "> 
    {todo.text}
      <div className=''>
    <button className=" mr-4"onClick={()=>{dispatch(removeTodo(todo.id))}}>⛔</button>
    <button className=" mr-4"onClick={()=>handleUpdation(todo)}>🔄</button>
</div>
     </li>
     ))}
    </>
  )
}

export default Todos