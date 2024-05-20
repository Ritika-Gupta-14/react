import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("pass");
  const [length, setLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);

  const getPassword= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number){
      str+="0123456789";
      console.log(str);
    }
    if(char){
      str+="!@#$%^&*_+-=`}{~";
    }
for(let i=0;i<length;i++){
  let ind=Math.floor(Math.random()*str.length);
  console.log(ind)
  pass+=str.charAt(ind);
}
setPassword(pass)
  },[length,setPassword,number,char])

const passref=useRef(null)
 const copytxt=()=>{
  passref.current?.select();
  window.navigator.clipboard.writeText(password);
 }
useEffect(()=>{
getPassword();
},[length,number,char,getPassword])

  return (
    <>
    <div className="flex  items-center justify-center h-full w-100" >
    <div className="flex flex-col bg-slate-700 h-auto w-1/2 rounded-3xl shadow-sm shadow-slate-300 items-center ">


    <div className="text-white text-3xl py-2"><h1>PASSWORD GENERATOR</h1></div>

  <div className="flex  justify-center text-white my-4">
            <input placeholder='password'
            readOnly value={password}
              className="text-black rounded-l-2xl px-3 py-1 focus:pointer-events-none" 
              ref={passref}/>
            <button 
            className="bg-blue-500 text-yellow-50 rounded-r-2xl px-3" onClick={copytxt}>
              COPY!</button>
  </div>
  <div className="flex justify-center text-white">
    <input 
    type="range" 
    min={4}
     max={30} 
     value={length} 
     onChange={(e)=>{
      setLength(e.target.value);
    }} 
    id="rng"></input>
    <label htmlFor="rng" className="mx-3">Length: {length}</label>
  </div>
<div className="flex justify-center text-white">
  <input type="checkbox" id="num" checked={number} onChange={()=>{
      setNumber(prev=>!prev)}}/><label htmlFor='num' className="mx-3" > Contains number {number}</label>
</div>
<div className="flex justify-center text-white mb-5">
  <input type="checkbox" id="char" checked={char} onChange={()=>{
      setChar(prev=>{return !prev})}}></input><label htmlFor='char' className="mx-3"> Contains special characters </label>
</div>

  </div>
  </div>
    </>
  )
}

export default App
