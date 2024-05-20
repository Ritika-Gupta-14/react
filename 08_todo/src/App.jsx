import { useEffect, useState } from "react"
import { TodoProvider } from "./contexts/TodoContext"
import Todoform from "./Components/Todoform";
import TodoDisplay from "./Components/TodoDisplay";


function App() {
  const [todos,setTodos]=useState([]);

useEffect(()=>{
    
    const todos= JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length>0) {setTodos(todos)}
  },[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  //function to add a new to-do element in the existig array of todos here, to do is an object which will be handled in the todoform
  function addTodo(todo){
    setTodos((prev)=>[todo,...prev])
   
  }

  //updateTodos
  function updateTodo(id,todo){
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
  }

  //filter method to delte any todo
function deleteTodo(id){
  setTodos((todo)=>todo.filter((checktodo)=>checktodo.id!==id))
}

//toggle completion 

function toggleCompleted(id){
  setTodos((prev)=>prev.map((todo)=>(todo.id===id?{...todo,completed:!todo.completed}:todo)))
}
useEffect(() => 
    console.log(todos)
  , [todos])


    return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
      <div className="flex h-full flex-wrap overflow-auto w-full items-center justify-center">
        <div className=" w-[80%] h-[80vh] flex flex-col items-center ">
      <h1 style={{boxShadow:'0 0 10px 1px silver'}} className="mb-10 bg-emerald-950 text-4xl text-center text-slate-200  p-2 w-full rounded-lg m-4 ">Your To-do list: </h1>
      <Todoform/>
      
        {todos.map((todo)=>(
        
          <div key={todo.id} >
        <TodoDisplay todo={todo} />
        </div>))}
      </div>
    </div>
    </TodoProvider>
  )
    }
export default App
