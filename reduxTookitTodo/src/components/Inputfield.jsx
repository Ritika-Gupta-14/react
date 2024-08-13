import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,updateTodo,valChg } from '../features/todo/todoSlice';

function Inputfield() {

  const value= useSelector(state=>state.val)
  const updateState=useSelector(state=>state.updating)
  const updateId =useSelector(state=>state.updateId)
   
    const dispatch=useDispatch();

const handleClick=(e)=>{
    e.preventDefault()
    if(updateState){
      dispatch(updateTodo({id:updateId,text:value}))
      dispatch(valChg(""))
    }else{
    dispatch(addTodo(value))
    dispatch(valChg(""))}
}

const handleChange=(e)=>{
  const data= e.target.value
  dispatch(valChg(data))
}

  return (
    <>
    <div className='m-10'>
    <form onSubmit={handleClick}>
        <input type='text' className='bg-gray-800 text-white rounded-lg m-2 p-2 border-white border-2 '
         value={value} 
        onChange={handleChange}></input>


        <button type="submit" className=' bg-slate-950 m-2 p-2 text-white rounded ' 
       > {updateState?"Update Todo":"Set Todo"}</button>
        </form>
        </div>
    </>
  )
}

export default Inputfield