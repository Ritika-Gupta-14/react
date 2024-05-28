import React from 'react'
import { useSelector } from 'react-redux'
import {Link, NavLink} from 'react-router-dom'
function Navbar() {
  const cart=useSelector((item)=>item.cart)
  const wishlist= useSelector((item)=>item.wishlist)
  return (
    <div className=' bg-amber-50 w-full min-h-14 flex justify-between  p-3 fixed top-0 left-0 flex-wrap'>
    <div >
    <NavLink to="/" className='font-bold text-sky-900 text-3xl'> SHOPPERSTOP </NavLink>
    </div>
    <div className='flex justify-evenly  '>
        <div className='mr-5' >
          <p className='rounded-full w-5 h-5 flex flex-col m-0.2 bg-black text-amber-50 text-xs text-center justify-center '> {wishlist.reduce((acc,item)=>acc+1,0)}</p>  
         <NavLink to="/wishlist">❤️</NavLink>
         </div>
         <div className='mr-5' >
          <p className='rounded-full w-5 h-5 flex flex-col m-0.2 bg-black text-amber-50 text-xs text-center justify-center '>{cart.reduce((acc,item)=>acc+item.quantity,0)}</p>  
         <NavLink to="/cart"> 🏬 </NavLink>
         </div>
    </div>
    </div>
  )
}

export default Navbar