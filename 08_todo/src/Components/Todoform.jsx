import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
function Todoform() {
  const { addTodo } = useTodo();
  const [msg, setMsg] = useState("");
  function handleClick() {
    const todo = { id: Date.now(), message: msg, checked: false };
    addTodo(todo);
  
    console.log;
    setMsg("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter your to-do"
        value={msg}
        className="p-2 rounded-l-xl 
         focus:outline-none w-[40vw]"
        cols={90}
        onChange={(e) => setMsg(e.target.value)}
      ></input>
      <button
        className="text-white bg-green-900 p-2 rounded-r-xl"
        onClick={handleClick}
      >
        {" "}
        Add
      </button>
    </div>
  );
}

export default Todoform;
