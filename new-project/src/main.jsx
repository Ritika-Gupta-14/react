import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import { store } from '../store/index.js'
import { Provider } from 'react-redux'
import Layout from './components/Layout.jsx'
import Wishlist from './components/Wishlist.jsx'
import Cart from './components/Cart.jsx'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path="wishlist" element={<Wishlist/>}/>
      <Route path="cart" element={<Cart/>}/>

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <RouterProvider router={router}/>
  
  </Provider>
)
