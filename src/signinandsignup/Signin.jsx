import React from 'react'
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { auth ,db} from '../firebase'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {doc,setDoc,arrayUnion} from 'firebase/firestore'

const Signin = () => {
    const navigate=useNavigate()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handlesignin=async()=>{
        const data=await createUserWithEmailAndPassword(auth,email,password)
       await updateProfile(data.user,{
        displayName:name
       })


const cart=doc(db,'cart',email)
await setDoc(cart,{
    cart:[],
})


const wishlist=doc(db,'wishlist',email)
await setDoc(wishlist,{
    wishlist:[],
})


setName('')
setEmail('')
setPassword('')
navigate('/signup')



    }
  return (
   <>
   <div className="w-[100%]">
   <div className="container border border-black lg:w-[30%] w-[80%] mx-auto my-auto flex flex-col items-center h-[320px] justify-around bg-[#222939] text-white rounded-lg mt-[100px]">
    <div className="heading">
        <h2 className='font-bold text-[30px]'>Signup</h2>
    </div>
    <div className="inputs flex flex-col  py-[10px] w-[80%]">
    <input type="text" className=' w-[100%] rounded-md px-[6px] py-[4px] outline-none bg-[#4E5464]  text-white' placeholder='Enter your name'
        value={name} onChange={(e)=>setName(e.target.value)}
        
        />
        <input type="text" className=' w-[100%] mt-[7px] rounded-md px-[6px] py-[4px] outline-none bg-[#4E5464] text-white' placeholder='Email'
        value={email} onChange={(e)=>setEmail(e.target.value)}
        
        />
        <input type="text" className=' w-[100%] mt-[7px] rounded-md px-[6px] py-[4px] outline-none bg-[#4E5464] text-white' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="button w-[80%]">
        <button className='rounded-md bg-orange-700 w-[100%] py-[4px] text-white font-sans hover:bg-orange-800'
      onClick={handlesignin}
        
        
        >Signup</button>
    </div>
<div className="footer">
    <h3>Have an account <Link className='text-orange-700'  to={'/signup'}>Login</Link></h3>
</div>




   </div>
   </div>
   
   </>
  )
}

export default Signin
