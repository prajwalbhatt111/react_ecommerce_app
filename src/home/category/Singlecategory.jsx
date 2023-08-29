import React from 'react'
import { useParams } from 'react-router-dom'
const Singlecategory = () => {
    const param=useParams()
    console.log(param.items)
  return (
    <div>
      {/* single category */}
      <h2>{param.items}</h2>
    </div>
  )
}

export default Singlecategory
