import React, { useEffect,useState } from 'react'

const Search = () => {
  
    const [list,setList]=useState([])
    const[List1,setList1]=useState([])
    const[search,setSearch]=useState('')
    // setList1(list.filter((v)=>v.title.includes(search)))

    // console.log(List1)
    // list.map((v)=>console.log(v.title))

    // console.log(List1)
    // const api=`https://dummyjson.com/products?limit=12`
    const api=`https://dummyjson.com/products`
    useEffect(()=>{
        fetch(api).then((data)=>data.json()).then((resp)=>setList(resp.products))
        if(search==''){
            setList1([])
        }
        else{
        setList1(list.filter((v)=>v.title.includes(search)))
        }
    },[search])
   

  return (
   <>
   <div className='w-[100%]'>

        <input type="text" className='border-b outline-none w-[100%] text-center py-5 md:text-[35px] text-[20px] font-bold' placeholder='SEARCH FOR PRODUCTS' value={search} onChange={(e)=>setSearch(e.target.value)}/>

    
    {
    List1.map((i)=><div className=' md:w-[50%] w-[100%] m-auto'>
    <div className='flex'>
    <img src={i.images[0]} alt="" className='md:w-[12%] w-[20%]'/>
    <div>
    <h2>{i.title}</h2>
    <h2>{i.description}</h2>

    </div>
    </div>
   
</div>)
    
}

    


    
     
    
    
     




      





       







        
  


   </div>
   </>
  )
}

export default Search
