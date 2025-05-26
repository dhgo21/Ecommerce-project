import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import About from './About'
import Wishlist from './Wishlist'
import Checkout from './Checkout'
import Orderdetails from './Orderdetails'
function Routing({shop,Filter,allcatefilter,cart,addtocart,setcart,wishlist,setwishlist,wishlistedids,setwishlistedids,removeproduct}) {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home
          addtocart={addtocart}
          wishlist={wishlist}
          setwishlist={setwishlist}
          wishlistedids={wishlistedids}
          setwishlistedids={setwishlistedids}/>}/>

        <Route path="/cart" element={<Cart
          cart={cart}
          setcart={setcart}/>}/>

        <Route path="shop" element={<Shop
          shop={shop}
          Filter={Filter}
          allcatefilter={allcatefilter}
          addtocart={addtocart}
          wishlist={wishlist}
          wishlistedids={wishlistedids}
          setwishlist={setwishlist}
          setwishlistedids={setwishlistedids}/>}/>
          
        <Route path="/about" element={<About />}/>

        <Route path="/wishlist" element={<Wishlist
          wishlist={wishlist}
          setwishlist={setwishlist}
          wishlistedids={wishlistedids}
          setwishlistedids={setwishlistedids}
          addtocart={addtocart}
          removeproduct={removeproduct}/>}/>

        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/orderdetails" element={<Orderdetails cart={cart}/>}></Route>
    </Routes>
    </>
  )
}

export default Routing