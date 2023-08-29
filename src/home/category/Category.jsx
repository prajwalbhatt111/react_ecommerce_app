import React from 'react'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <div className='flex lg:flex-nowrap w-[100%] lg:px-2 justify-around lg:justify-between py-4 px-2 flex-wrap'>
        
        <div className='lg:w-[60%] w-[50%]'>
        <Link to={'/products/category/smartphones'}><img src="/category/cat-1.jpg" alt="" className='lg:w-[90%] w-[90%] hover:translate-y-2 hover:ease-in-out'/></Link>
        </div>
        <div className='lg:w-[60%] w-[50%]'>
        <Link to={'/products/category/laptops'}><img src="/category/cat-2.jpg" alt=""  className='lg:w-[90%] w-[90%] hover:translate-y-2 hover:ease-in-out'/></Link>
        </div>
        <div className='lg:w-[60%] w-[50%] lg:mt-0 mt-3'>
        <Link to={'/products/category/groceries'}><img src="/category/cat-3.jpg" alt=""  className='lg:w-[90%] w-[90%] hover:translate-y-2 hover:ease-in-out' /></Link>
        </div>
        <div className='lg:w-[60%] w-[50%] lg:mt-0 mt-3'>
        <Link to={'/products/category/motorcycle'}><img src="/category/cat-4.jpg" alt=""  className='lg:w-[90%] w-[90%] hover:translate-y-2 hover:ease-in-out'/></Link>
        </div>

    </div>
  )
}

export default Category
