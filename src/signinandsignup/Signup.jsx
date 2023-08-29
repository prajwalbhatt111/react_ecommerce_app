import React from 'react'
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { auth } from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
const Signup = () => {
    const navigate=useNavigate()
    const[loginemail,setLoginEmail]=useState("");
    const[loginpassword,setLoginPassword]=useState("");
    const handlelogin=async()=>{
        try{
const user=await signInWithEmailAndPassword(auth,loginemail,loginpassword)
const data=localStorage.setItem('users',JSON.stringify(user.user))
navigate('/')
        }
        catch(error){
            console.log(error)
        }
    }
   
  return (
   <>
  <div className="main w-[100%]">
   <div className="container border border-black lg:w-[30%] w-[80%] mx-auto my-auto flex flex-col items-center h-[320px] justify-around bg-[#222939] text-white rounded-lg mt-[100px]">
    <div className="heading">
        <h2 className='font-bold text-[30px]'>LOGIN</h2>
    </div>
    <div className="inputs flex flex-col  py-[10px] w-[80%]">
    
        <input type="text" className=' w-[100%] mt-[7px] rounded-md px-[6px] py-[4px] outline-none bg-[#4E5464] text-white' placeholder='Email'
        value={loginemail} onChange={(e)=>setLoginEmail(e.target.value)}
        
        />
        <input type="text" className=' w-[100%] mt-[7px] rounded-md px-[6px] py-[4px] outline-none bg-[#4E5464] text-white' placeholder='Password' value={loginpassword} onChange={(e)=>setLoginPassword(e.target.value)}/>
    </div>
    <div className="button w-[80%]">
        <button className='rounded-md bg-yellow-400 w-[100%] py-[4px] text-black font-sans hover:bg-yellow-800 font-bold'
       onClick={handlelogin}
        
        
    >Login</button>
    </div>
<div className="footer">
    <h3>Don't Have an account <Link className='text-yellow-400 font-bold'  to={'/signin'}>Signup</Link></h3>
</div>




   </div>
   </div>
   </>
  )
}

export default Signup
