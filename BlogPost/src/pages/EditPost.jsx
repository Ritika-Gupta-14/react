import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import configService from '../supabase/configs'
import { Container, Postform } from '../components'

function EditPost() {
    const navigate= useNavigate()
    const slug= useParams()
    const [post,setPost]=useState(null)
  useEffect(()=>{
    if(slug){
        configService.fetchData(slug).then((data)=>{
            if(data) 
             {setPost(data)}
            else{
                navigate("/")
        }}).catch((err)=>{
            console.error(err)
        })
    
    }
  },[slug,navigate])
  return post?(
    <div className='py-8'>
        <Container>
            <Postform post={post}/>
        </Container>
        

    </div>
  ):null
}

export default EditPost