import React from 'react'
import { useSelector } from 'react-redux'
import Cartcard from './Cartcard'

function Cart() {
  const cart= useSelector((state)=>state.cart)
  return (
    <>
    <div className='w-full  mt-20 flex flex-col '>
    <div className="h-20 font-extrabold text-sky-950 w-full text-4xl text-center"><p>Bag 🏬</p></div>
    <div className='flex lg:flex-col grow flex-wrap '>

      <div className={`md:flex justify-center hidden w-full h-12 `}>
<p className=' text-sky-950 font-bold text-lg w-1/3 '>Product</p>  
<p className=' text-sky-950 font-bold text-lg w-1/6'>Quantity</p> 
 <p className=' text-sky-950 font-bold text-lg w-1/12'>Price</p>  
 <p className=' text-sky-950 font-bold text-lg w-1/12'>Total</p> 
 <p className=' text-sky-950 font-bold text-lg w-1/3'> </p>  
</div>
    
    {cart.map((item)=>{
      return <Cartcard key={item.id} id={item.id} image ={item.image} title={item.title} quantity={item.quantity} price={item.price} rating={item.rating}/>

    })}

    </div>
    </div>
    </>
  )
}

export default Cart