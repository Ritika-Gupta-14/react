
 const ADD_TO_CART="Add_to_cart"
const REMOVE_FROM_CART="Remove_from_cart"
 const INCREASE_QUANTITY="Increase_Quantity"
 const DECREASE_QUANTITY="Decrease_Quantity"

export const CartReducer=function(state=[], action){
    switch(action.type){
        case ADD_TO_CART:
            const existing= state.find((item)=>item.id===action.payload.id)
            if(existing){
            return state.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item)}
            return [...state,action.payload]
        case REMOVE_FROM_CART:
            return state.filter((item)=>item.id!==action.payload.id)
        case INCREASE_QUANTITY:
            return state.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item)
        case DECREASE_QUANTITY:
            return state.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity-1}:item).filter((item)=>{
                return item.quantity!==0
            })
        default:
            return state
    }
}



export function add_to_cart(id,title,price,image,rating,quantity=1){
    return{type:ADD_TO_CART,payload:{id,title,price,image,rating,quantity}, }
}
export function remove_from_cart(id){
    return{type:REMOVE_FROM_CART,payload:{id}, }
}

export function increase_quantity(id){
    return{type:INCREASE_QUANTITY,payload:{id}, }
}
export function decrease_quantity(id){
    return{type:DECREASE_QUANTITY,payload:{id}, }
}