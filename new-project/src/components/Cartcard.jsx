import React from 'react'
import { useDispatch } from 'react-redux'
import { add_to_wishlist } from '../../store/WishlistReducer';
import { decrease_quantity, increase_quantity, remove_from_cart } from '../../store/CartReducer';


function Cartcard({id,image,title,quantity,price,rating}) {

    const dispatch= useDispatch()
const move_to_wishlist= (id,title,price,image,rating)=>{
    dispatch(add_to_wishlist(id,title,price,image,rating))
    dispatch(remove_from_cart(id))
}



  return (
    <>
    <div className='w-40 min-h-12 flex my-2  p-3 bg-amber-50 text-sky-900 grow sm:shrink-0 hover:bg-amber-100 flex-wrap flex-col md:flex-row md:w-full'>
    {/* photo+title */}
    <div className="flex w-full md:w-1/3 justify-around  ">
        <div className=' h-10 w-10  '><img src={image} className='h-10 w-10'/></div>
        <div className=' text-sky-950 w- font-semibold text-wrap '>{title}</div>
    </div>


    {/* increase count decrease */}
    <div className="flex justify-around md:w-1/6">
    <button className='h-10 w-10 p-1 justify-around bg-slate-50 text-sky-950 font-bold '
    onClick={()=>{dispatch(decrease_quantity(id))}}>-</button>
    <p className=' text-sky-950 font-semibold text-center '>{quantity}</p>
    <button className='h-10 w-10 p-1 justify-around bg-slate-50 text-sky-950 font-bold '
    onClick={()=>{dispatch(increase_quantity(id))}}>+</button>
    </div>


<div className="flex space  justify-around md:w-1/12">
<p className=' text-sky-950 font-semibold text-center'>{`${window.innerWidth<=768 ? "M.R.P: " : ""}`} ${price}</p>  
</div>
<div className="flex space  justify-around md:w-1/12">
<p className=' text-sky-950 font-semibold text-center justify-self-center'> Sums up to ${quantity*price}  </p>   
</div>

    {/* move tpo wishist remove */}
    <div className="flex space  justify-around md:w-1/3">
    <button className='min-h-10 w-auto p-1 justify-around rounded-md text-amber-50 bg-sky-950 font-bold '
    onClick={()=>{move_to_wishlist(id,title,price,image,rating)}}>
        Move to Wishlist</button>
    <button className='min-h-10 w-auto p-1 justify-around rounded-md text-amber-50 bg-red-700 font-bold '
    onClick={()=>{dispatch(remove_from_cart(id))}}>
        Remove</button>

    </div>
    </div>
    </>
  )
}

export default Cartcard