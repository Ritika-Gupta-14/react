import { useState } from "react"

function App() {
  const[color, setColor]=useState("black");

  return (
    <>
      <div className="mx-auto w-full h-screen" style={{backgroundColor:color}}>
        <div className="flex w-screen items-center h-100 justify-center fixed bottom-10 flex-wrap">
        <div className=" bg-orange-200	shadow-2xl flex w-100 flex-wrap mx-6 rounded-full gap-3 px-2">
           <button onClick={()=>{setColor("red")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl text-white " style={{backgroundColor:"red"}}>red</button>
           <button onClick={()=>{setColor("blue")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl text-white" style={{backgroundColor:"blue"}}>blue</button>
           <button onClick={()=>{setColor("green")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl text-white" style={{backgroundColor:"green"}}>green</button>
           <button onClick={()=>{setColor("pink")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl  " style={{backgroundColor:"pink"}}>pink</button>
           <button onClick={()=>{setColor("purple")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl text-white" style={{backgroundColor:"purple"}}>purple</button>
           <button onClick={()=>{setColor("lavender")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl " style={{backgroundColor:"lavender"}}>lavender</button>
           <button onClick={()=>{setColor("thistle")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl" style={{backgroundColor:"thistle"}}>lilac</button>
           <button onClick={()=>{setColor("salmon")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl " style={{backgroundColor:"salmon"}}>salmon</button>
           <button onClick={()=>{setColor("teal")}}className="mx-1 my-2 px-2 py-1.5 shadow-xl rounded-2xl text-white" style={{backgroundColor:"teal"}}>teal</button>
           </div>
           </div>
      </div>
    </>
  )
}

export default App
