import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(10);

  function add(){
    setCounter(counter+1);
    console.log(counter)
    if(counter+1>20){
      setCounter(0);
    }
  }
  
  function sub(){
    setCounter(counter-1);
    console.log(counter)
    if(counter-1<0){
      setCounter(0);
    }
  
  }

  return (
    <>
      <h1> Counter :{counter}</h1>
      <button onClick={add}>Increment counter</button>
      <br/>
      <button onClick={sub}>Decrement Counter</button>
      <h3>current counter value= {counter}</h3>
      <br/>
      <h2>counter value can be between 0 to 20</h2>
    </>
  )
}

export default App
