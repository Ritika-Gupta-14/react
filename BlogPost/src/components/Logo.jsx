import React from 'react'

function Logo({width='100px'}) {
  return (
    <div className={`w-${width} text-3xl`}>Bloggy</div>
  )
}

export default Logo