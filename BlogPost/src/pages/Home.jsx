import React, { useEffect, useState } from 'react'
import configService from '../supabase/configs'
import { Container, Postcard } from '../components'

function Home() {
    
    const [posts,setPosts]= useState([])
    useEffect(()=>{
        configService
        .fetchAllData()
        .then((data) => {
          if (data) {
            setPosts(data);
          } else {
            throw error;
          }
        })
        .catch((err) => {
          console.error("Error getting all posts");
        });
    },[])

    
  
    if (posts.length === 0) {
        return (
            <div className="py-8 ">
                <Container >
                   <div className="min-h-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500 text-center">
                                No posts yet
                            </h1>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.slug} className='p-2 w-1/4'>
                            {console.log({...post})}
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
                    }

export default Home