import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { About, Contact, Github, Home, User } from './components/index.js'
import githubInfoLoader from './components/Github/githubInfoLoader'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="about" element={<About/>} />
      <Route path="" element={<Home/>} />
      <Route path="github" element={<Github/>} loader={githubInfoLoader} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user/:userid" element={<User/>} />
      <Route path="*" element={<ErrorPage/>} errorElement={<ErrorPage/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
