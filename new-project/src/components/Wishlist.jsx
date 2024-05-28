import React from 'react'
import { useSelector } from 'react-redux'
import Wishcard from './Wishcard'

export default function Wishlist() {
  const wishlist= useSelector((state)=>state.wishlist)
  return (
    <>
    <div className='w-full  mt-20 flex flex-col '>
    <div className="h-20 font-extrabold text-sky-950 w-full text-4xl text-center"><p>Wishlist ❤️</p></div>
    <div className='flex lg:flex-col grow flex-wrap '>

      <div className={`lg:flex justify-center hidden w-full h-12 `}>
<p className=' text-sky-950 font-bold text-lg w-1/3 '>Product</p>  
<p className=' text-sky-950 font-bold text-lg w-1/6'>Rating</p> 
 <p className=' text-sky-950 font-bold text-lg w-1/6'>Price</p>  
 
 <p className=' text-sky-950 font-bold text-lg w-1/3'> </p>  
</div>
    
    {wishlist.map((item)=>{
      return <Wishcard key={item.id} id={item.id} image ={item.image} title={item.title} quantity={item.quantity} price={item.price} rating={item.rating}/>

    })}

    </div>
    </div>
    </>
  )
}
