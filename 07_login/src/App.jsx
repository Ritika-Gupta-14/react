
import './App.css'
import Login from './components/Login'
import Info from './components/Info'
import { useState } from 'react'
import { UserContextProvider } from './context/UserContext'

function App() {

  const[user,setUser]=useState(null);

  return (
    <UserContextProvider value={{user,setUser}}>
     <Login/>
      <Info/>
    </UserContextProvider>
  )
}

export default App
