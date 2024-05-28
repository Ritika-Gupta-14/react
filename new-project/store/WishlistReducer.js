
 const ADD_TO_WISHLIST="Add_to_wishlist"
 const REMOVE_FROM_WISHLIST="Remove_from_wishlist"


export const WishlistReducer=function(state=[], action){
    switch(action.type){
        case ADD_TO_WISHLIST:
            const existing= state.find((item)=>item.id===action.payload.id)
            if(existing){return state}
            return [...state,action.payload]
        case REMOVE_FROM_WISHLIST:
            return state.filter((item)=>item.id!==action.payload.id)
        default:
            return state
    }
}



export function add_to_wishlist(id,title,price,image,rating){
    return{type:ADD_TO_WISHLIST,payload:{id,title,price,image,rating}, }
}
export function remove_from_wishlist(id){
    return{type:REMOVE_FROM_WISHLIST,payload:{id}, }
}