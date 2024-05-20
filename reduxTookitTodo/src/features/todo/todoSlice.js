import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[],
    val:"",
    updating:false,
    updateId:null
}

export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        valChg: (state,action)=>{
            state.val =action.payload
        },
        setUpdating: (state)=>{
            state.updating =!state.updating
        },
        setUpdateId: (state,action)=>{
            state.updateId =action.payload
        },
        addTodo: (state,action)=>{
            const newtodo={id:nanoid(),text:action.payload}
            state.todos.push(newtodo)
        },

        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    
        updateTodo: (state,action)=>{
            
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)
            state.updateId=null;
            state.updating=false;
        }
    }
})
export const {addTodo,removeTodo,updateTodo,valChg,setUpdateId,setUpdating}=todoSlice.actions
export default todoSlice.reducer;