import React, { useContext, useState } from 'react'
import {UserContext} from '../context/UserContext'

function Login() {
    const[name,setName]=useState("")
    const[pass,setPass]=useState("")
    function handleNameChange(e){
        setName(e.target.value)
    }
    function handlePassChange(e){
        setPass(e.target.value)
    }


    const{setUser}= useContext(UserContext)
    function handleClick(){
        setUser({name,pass})
    }
  return (
    <>
    Username: <input type="text" value={name} onChange={(e)=>{handleNameChange(e)}}/>
    <br/>
    Password: <input value={pass} onChange={(e)=>{handlePassChange(e)}} type="password" />
    <br/>
    <button onClick={handleClick}>Submit </button>

 </>
  )
}

export default Login