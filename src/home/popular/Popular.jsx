import React, { useState } from 'react'
import {Popularprods} from '../../apis/api'
import { useEffect } from 'react'
import { Context } from '../../App'
import { useContext } from 'react'
import {doc,updateDoc,arrayUnion} from 'firebase/firestore'
import { db } from '../../firebase'

const Popular = () => {
    const data=JSON.parse(localStorage.getItem('users'))
    const{cartitems,setCartItems}=useContext(Context)
    const[items,setItems]=useState([])
    const[loggedin,setLoggedin]=useState(true)
const handleonclick=async(i)=>{
//    (data)?setCartItems((cartitems)=>[...cartitems,i]):setLoggedin(false)
const d=doc(db,'cart',data.email)
await updateDoc(d,{
    cart:arrayUnion(i)

})
}
useEffect(()=>{
fetch(Popularprods).then((data)=>data.json()).then((resp)=>setItems(resp.products))
},[])


  return (
 <>
 <div className=' w-[100%] px-2'>
    <h2 className='font-bold text-[40px]'>Popular Products</h2>
    <div className='flex justify-between flex-wrap'>
        {
            items.map((v)=>  <div className='lg:w-[23%] border  rounded-md flex flex-col justify-between mt-4 w-[45%]' >
            <img src={v.images[0]} alt="" className='lg:w-[100%] lg:h-[30vh] rounded-md' />
            <div className='flex flex-col'>
            <h2 className='font-bold lg:text-[30px]'>{v.title}</h2>
            <h2 className='font-bold'>${v.price}</h2>
            </div>
            <button className='rounded-md py-2 bg-blue-500 text-white hover:bg-blue-700' onClick={()=>handleonclick(v)}>Add To Cart</button>
        </div>)
        }











  


   








   





   








    </div>






    







 </div>
 
 
 
 </>
  )
}

export default Popular
