import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './home/Home';
import Singlecategory from './home/category/Singlecategory';
import { createContext,useState } from 'react';
import Signin from './signinandsignup/Signin';
import Signup from './signinandsignup/Signup';
import Protectedroute from './protected/Protectedroute';
import Search from './components/Search';
export const Context=createContext()
function App() {
  const[cartitems,setCartItems]=useState([])
  console.log(cartitems)
  return (
    <>
    <Context.Provider value={{cartitems,setCartItems}}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
     <Route  path='/products/category/:items' element={<Singlecategory />}/>
     <Route path='/signin' element={<Signin />} />
     <Route path='/signup' element={<Signup />} />
     <Route path='/search' element={<Search />} />
    </Routes>
    </Context.Provider>
    
    
    </>
  );
}

export default App;
