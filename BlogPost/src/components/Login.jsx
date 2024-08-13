import { useState } from "react"
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import {login as storeLogin} from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from "react-redux"
import authService from "../supabase/auth"
import {useForm} from 'react-hook-form'

function Login() {
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const{register, handleSubmit}= useForm()
  const [error, setError]=useState("")

  const login= async(detailData)=>{
    setError("")
    try {
      const {session}=await authService.signIn(detailData)
      if (session){
        const data= await authService.getUserInfo()
        if(data)       dispatch(storeLogin(data.user))
        navigate("/")
      }
      
    } catch (error) {
      setError(error)
    }

  }
  return (
    <>
    <div className="w-full">
    <div >
    <div className="pt-14">
      <Logo/>
    </div>
    <div className="text-blue-300 p-5 ">
    <div><h2>SignIn to your account!</h2></div>
    <div className="text-sm  font-thin">Don't have an acount? <Link to="/signup" className=" text-sky-700 hover:text-sky-400 underline ">SignUp</Link></div>
    <div className="text-sm text-red-700 font-thin p-4 ">{error && <div>{error}</div>}</div></div></div>
<div>

    <form onSubmit={handleSubmit(login)}>

    <Input
    label="Enter your email: "
    placeholder ="email" 
    type="email"
    className=""
    //register method takes in a unique key and is to be spread everytime
    {...register("email",{
      required:true,
      validate:{
        matchPattern:(value)=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value) ||
        "Email adress must be valid!"
      }
    })}
    />
    <Input
    label="Enter your password: "
    placeholder="atleast 6 digit long"
    type="password"
    className=""
    {...register("password",{
      required:true,
      minLength:6,
      maxLength:10
    })}
    />
    <Button type="submit">SignIn</Button>
    </form>
</div>
</div>
    </>
  )
}

export default Login