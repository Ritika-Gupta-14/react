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
    <li key={todo.id}> 
    {todo.text}

    <button className=" m-2 p-2 "onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
    <button className=" m-2 p-2 "onClick={()=>handleUpdation(todo)}>€</button>

     </li>
     ))}
    </>
  )
}

export default Todos