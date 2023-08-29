import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Context } from '../App'
import { useContext ,useEffect,useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {doc,onSnapshot,arrayRemove, updateDoc} from 'firebase/firestore'
import {onAuthStateChanged} from 'firebase/auth'
import { db,auth } from '../firebase'

const Cart = ({setOpen}) => {
  const data=JSON.parse(localStorage.getItem('users'))
  // const{cartitems,setCartItems}=useContext(Context)
  const[cartitems,setCartItems]=useState([])
  // cartitems.map((v)=>console.log(v))
 
  // console.log(cartitems)
 
 
    useEffect(()=>{

      if(data){
      onSnapshot(doc(db,'cart',data.email),(doc)=>{
    setCartItems(doc.data().cart)
      })
    }
    
    },[])



  const handleonremove=async(v)=>{
    const dbref=doc(db,'cart',data.email)
    await updateDoc(dbref,{
      cart:arrayRemove(v)
    })
  
  }
  if(data){
  return (
   <>
   <div>
   <div className='flex justify-between px-1 pt-2 pb-2 border-b items-center'>
    <h2 className='font-bold'>SHOPPING CART</h2>
<AiOutlineCloseCircle size={30} className='cursor-pointer' onClick={()=>{setOpen(false)}} />
   </div>



  
    <div><h2>Welcome {data.displayName}</h2></div>
  
{
  cartitems.map((v)=> <div className='bg-[#F1F3F1] mt-3 px-2'>
  <div className='flex w-[100%] justify-between items-center'>
<img src={v.images[0]} alt="" className='w-[40%]'/>
<h2>{v.title}</h2>
<AiOutlineClose onClick={()=>handleonremove(v)} className='cursor-pointer'/>


  </div>
  <h2>${v.price}</h2>
  </div>)
}

   </div>
   
   
   </>
  )

}
else{
  return(
<>

<div>
   <div className='flex justify-between px-1 pt-2 pb-2 border-b items-center'>
    <h2 className='font-bold'>SHOPPING CART</h2>
<AiOutlineCloseCircle size={30} className='cursor-pointer' onClick={()=>{setOpen(false)}} />
   </div>
   <h2>Please Login To add to cart</h2>


   </div>
</>



  )
}
 

}


export default Cart
