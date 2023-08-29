import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] md:flex md:flex-row md:items-center md:justify-around w-[100%] md:pt-6 md:pb-11
    
    flex flex-col-reverse justify-between items-center pt-2 pb-8 
    '>
      <div className=' md:flex md:flex-col md:w-[40%] md:justify-between md:items-center text-white md:py-1 md:px-1
       w-[100%] items-center justify-between
      
      '>
        <h2 className='md:text-[100px] text-[80px] text-center'>SALES</h2>
        <p className=' md:w-[80%] md:m-auto  text-[18px] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptatem sunt facere necessitatibus ullam quasi quam nulla a aspernatur velit!</p>
        <div className='flex justify-around w-[100%] items-center mt-4 '>
          <button className='border border-white px-2 py-2'><Link to={'/signin'}>SIGN IN</Link></button>
          <button className='px-2 py-2 bg-[#fff] text-black'><Link to={'/signup'}>SIGN UP</Link></button>
        </div>
      </div>
      <div className='md:w-[30%] w-[50%]'><img src="/assets/banner-img.png" alt="" className='w-[100%]' /></div>

    </div>
  )
}

export default Hero
