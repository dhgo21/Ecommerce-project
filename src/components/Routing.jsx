import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import About from './About'
function Routing({shop,Filter,allcatefilter,cart,addtocart,setcart}) {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home addtocart={addtocart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}/>
        <Route path="shop" element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
        <Route path="/about" element={<About />}/>
    </Routes>
    </>
  )
}

export default Routing