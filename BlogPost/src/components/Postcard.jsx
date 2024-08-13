import React from 'react'
import {Link} from "react-router-dom"
function Postcard({
    slug,
    title,
}) {
  return (
    
  <Link to={`{/post/:${slug}}`}>
<div className='bg-blue-200'>
     <h2>{title}</h2>
</div>

  </Link>
  )
}

export default Postcard