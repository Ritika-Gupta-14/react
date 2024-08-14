import React from 'react'
import {Link} from "react-router-dom"
function Postcard({
    slug,
    title,
})
{
  console.log(`/post/${slug}`)
  return (
  
  <Link to={`/post/${slug}`}>
    <div>
<div className='bg-blue-200'>
     <h2>{title}</h2>
</div>
</div>

  </Link>
  )
}

export default Postcard