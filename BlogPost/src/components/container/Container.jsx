import React from 'react'

function Container({children}) {
  return (
    <div className='w-screen overflow-x-hidden m-0 '>{children}</div>
  )
}

export default Container