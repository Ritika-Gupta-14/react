import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../supabase/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch= useDispatch()
    const logoutHandler=()=>{
        authService.signOut().then(()=>{
            dispatch(logout())}
        )
        }
  return (
    <button onClick={logoutHandler} className='bg-blue-300 text-gray-800 rounded-lg p-4'>Logout</button>
  )
}

export default LogoutBtn