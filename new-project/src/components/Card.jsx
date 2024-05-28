import React from 'react'
import { useDispatch } from 'react-redux'
import { add_to_cart } from '../../store/CartReducer'
import { add_to_wishlist } from '../../store/WishlistReducer';

function Card({id,title,price,image,rating}) {
  const dispatch= useDispatch();
  return (
    <>
   <div className={`flex flex-col bg-amber-50 grow justify-around shrink transition-all duration-75 h-auto rounded-lg p-2 m-7 w-64 flex-nowrap shadow-lg hover:bg-yellow-50 sm:shrink-0 sm:grow-0`} >
    <h3 className=" text-sky-900  text-lg  font-semibold p-2 m-2 ">{title}</h3>
    
    <img src={image} alt={title} className=" align-middle justify-self-center h-49 w-full"></img>
  
    <p>M.R.P: ${price}</p>
    <p>Rated <span className={` ${rating.rate<2.5?"text-red-600":"text-green-700"} font-bold `} >{rating.rate}</span>/5 by {rating.count} people</p>
    
    <div>
      <button className='p-2 m-2 text-white bg-green-800 rounded-md hover:bg-green-700' 
      onClick={()=>{dispatch(add_to_cart(id,title,price,image,rating))}}>
        Add to cart
      </button>
      <button className='p-2 m-2 text-white bg-red-800 rounded-md hover:bg-red-700'
      onClick={()=>{dispatch(add_to_wishlist(id,title,price,image,rating))}}>
        Wishlist
      </button>
    </div>
</div>
    </>
  )
}

export default Card
