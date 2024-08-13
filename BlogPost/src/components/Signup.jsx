import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../supabase/auth'
import { login as storeLogin } from '../store/authSlice'
import { useForm } from 'react-hook-form'
import {Button,Input,Logo} from './index'

function Signup() {
    const navigate=useNavigate()
    const dispatch= useDispatch()
    const{register,handleSubmit}=useForm()
    const [error,setError]=useState()

    const signup=async(details)=>{
        setError("")
        try {
            const {session}= await authService.signUp(details)
            if(session){
                const data= authService.getUserInfo()
                if(data) dispatch(storeLogin(data.user))
                navigate("/")
            }

        } catch (error) {
            setError(error)
        }

    }
    return (
        <>
        <div className="w-full">

        <div>
        <div className="pt-14">
          <Logo/>
        </div>
        <div className="text-blue-300 p-5 ">
        <div><h2>SignUp your account!</h2></div>
        <div className="text-sm  font-thin">Already have an acount? <Link to="/login">SignIn</Link></div>
        <div className="text-sm text-red-700 font-thin p-4 ">{error && <div>{error}</div>}</div></div></div>
    <div>
    
        <form onSubmit={handleSubmit(signup)}>
    
        <Input
        label="Enter your email: "
        placeholder ="email" 
        type="email"
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
        label="Enter your password"
        placeholder=" atleast 6 digit long"
        type="password"
        {...register("password",{
          required:true,
          minLength:6,
          maxLength:10
        })}
        />
        <Button type="submit">SignUp</Button>
        </form>
    </div>
    </div>
        </>
      )
}

export default Signup