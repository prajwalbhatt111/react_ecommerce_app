import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react'
import Cart from './Cart'
const Navbar = () => {
    const[open,setOpen]=useState(false)
  return (
    <>
    <div className=' flex md:justify-between lg:justify-around w-[100%] justify-between md:py-3 md:px-2 py-3 px-4 lg:py-3 lg:px-4 bg-[#1F1E1F] text-[#fff]'>
  
        <ul className='font-semibold md:flex lg:justify-between items-center lg:w-[20%] lg:text-[20px] md:w-[35%] w-[35%] justify-between text-[10px] hidden md:text-[20px]'>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link>ABOUT</Link></li>
        <li><Link>CATEGORIES</Link></li>
        </ul>
 
    <div className='md:w-[10%]  flex justify-center items-center '>
        <h2 className='text-[25px] md:text-[20px] font-bold'><Link to={'/'}>ECOMMSTORE</Link></h2>
    </div>
    <div className=' flex lg:w-[8%] md:w-[18%] w-[25%] justify-between items-center '>
       <Link to={'/search'}><AiOutlineSearch size={25}  className='cursor-pointer'/></Link> 
        <AiOutlineHeart size={25} className='cursor-pointer'/>
        <AiOutlineShoppingCart size={25} className='cursor-pointer' onClick={()=>setOpen(true)}/>

    </div>
    {
        open?<div className='absolute w-[100%] h-[1000px] top-0 bg-black/30 left-0'></div>:""
    }
    </div>
   
   
    <div className={open?'absolute h-screen lg:w-[20%] md:w-[40%] w-[100%] right-0 top-0  z-[99] bg-[#fff] ease-in-out':

'absolute h-screen w-[20%] right-0 top-0 z-[99] bg-[#fff] hidden ease-in-out'
}>
    <Cart setOpen={setOpen} />
    </div>
    </>
  )
}

export default Navbar
