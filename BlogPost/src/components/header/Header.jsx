import React from 'react'
import {Container,LogoutBtn,Logo} from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
 
  const authStatus= useSelector((state)=>state.auth.status)
  console.log(authStatus);
  const navigate= useNavigate()
 
 
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
    ]
  
  
  return (
    <header>
      <Container>
        <div className='flex flex-wrap bg-gray-950 text-blue-400 fixed top-0 w-screen justify-between'>
        <div className='p-2 mr-2 '>
        <Link to="/"><Logo width="70px" /></Link>
        </div>
        <div>
          <ul className='pl-12 p-2 flex justify-around'>
            {
              navItems.map((item)=>(
                item.active?(
                <li key={item.name} className='pr-3 text-base  '>
                 <button className="border-white border rounded-3xl p-2 hover:bg-gray-800 " onClick={()=>navigate(item.slug)}>{item.name}</button>
                </li>):null
              ))
            }

          {authStatus && (
            <li className='pr-3 text-base  '><LogoutBtn/></li>
          )}
          </ul>
        </div>
        
        
        </div>
      </Container>
    </header>
  )
}

export default Header