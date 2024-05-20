import React, { useContext } from 'react'
import {UserContext} from '../context/UserContext'

function Info() {
    const {user}=useContext(UserContext)
  if(!user|| user.name==""||user.pass=="") return <div><i>Please login</i></div>
  return(
    <>
    <br/>
    username= {user.name}
    <br/>
    Password ={user.pass}

    </>
  )
}

export default Info