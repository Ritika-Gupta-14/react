import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const err= useRouteError();
    console.log(err);

  return (
    
    <div className="h-[69vh] w-full mx-auto my-auto flex flex-col items-center justify-center">
        <h1>oops...!</h1>
        <h2>some unexpected error occured</h2>
    
    </div>
    
    
  )
}

export default ErrorPage