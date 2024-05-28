import { combineReducers, createStore } from "redux";
import { ProductReducer } from "./ProductReducer";
import { CartReducer } from "./CartReducer";
import { WishlistReducer } from "./WishlistReducer";


const reducer= combineReducers({
    products: ProductReducer,
    cart: CartReducer,
    wishlist: WishlistReducer

})

export const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
