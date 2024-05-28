import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  remove_from_wishlist } from '../../store/WishlistReducer';
import { add_to_cart } from '../../store/CartReducer';


function Wishcard({id,title,price,image,rating}) {
   
    
    const dispatch= useDispatch()
const move_to_cart= (id,title,price,image,rating)=>{
    dispatch(add_to_cart(id,title,price,image,rating))
    dispatch(remove_from_wishlist(id))
}



  return (
    <>
    <div className='w-40 min-h-12 flex my-2  p-3 bg-amber-50 text-sky-900 grow sm:shrink-0 hover:bg-amber-100 flex-wrap flex-col lg:flex-row lg:w-full'>
    {/* photo+title */}
    <div className="flex w-full lg:w-1/3 justify-around  ">
        <div className=' h-10 w-10  '><img src={image} className='h-10 w-10'/></div>
        <div className=' text-sky-950 w- font-semibold text-wrap '>{title}</div>
    </div>


    {/* increase count decrease */}
    <div className="flex justify-around lg:w-1/6">
    
    <p className=' text-sky-950 font-semibold text-center '>Rated {rating.rate }/5 </p>
   
    </div>


<div className="flex space  justify-around lg:w-1/6">
<p className=' text-sky-950 font-semibold text-center'>${price}</p>  
</div>


    {/* move tpo wishist remove */}
    <div className="flex space  justify-around lg:w-1/3">
    <button className='min-h-10 w-auto p-1 justify-around rounded-lg text-amber-50 bg-sky-950 font-bold '
    onClick={()=>{move_to_cart(id,title,price,image,rating)}}>
        Move to Cart</button>
    <button className='min-h-10 w-auto p-1 justify-around rounded-lg text-amber-50 bg-red-700 font-bold '
    onClick={()=>{dispatch(remove_from_wishlist(id))}}>
        Remove</button>

    </div>
    </div>
    </>
  )
}

export default Wishcard