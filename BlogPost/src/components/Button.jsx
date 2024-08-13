import React from 'react'

function Button({children,
type="button",
className="",
...props}) {
  return (
    <button className={`border-gray-500 border pl-4 pr-4 pt-2 pb-2 rounded-3xl m-4 shadow-sm shadow-slate-400 hover:bg-gray-950 ${className}`} type={type} {...props}>
       {children} 
    </button>
  )
}

export default Button