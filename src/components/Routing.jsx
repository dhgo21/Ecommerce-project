import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
function Routing({shop,Filter,allcatefilter}) {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="shop" element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>}/>
    </Routes>
    </>
  )
}

export default Routing