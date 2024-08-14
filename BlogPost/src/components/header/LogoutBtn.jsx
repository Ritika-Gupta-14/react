import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../supabase/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch= useDispatch()
    const logoutHandler=()=>{
        authService.signOut().then(()=>{
            dispatch(logout())
            
          }
        )
        }
  return (
    <button onClick={logoutHandler} className="border-white border rounded-3xl p-2 hover:bg-gray-800">Logout</button>
  )
}

export default LogoutBtn