import React from 'react'
import Hero from './Hero/Hero'
import Category from './category/Category'
import Popular from './popular/Popular'


const Home = () => {
 
  return (
    <>
    <Hero />
    <div className='lg:w-[70%] lg:m-auto'>
    <Category />
    <Popular />
    </div>

    
    </>
  )
}

export default Home
