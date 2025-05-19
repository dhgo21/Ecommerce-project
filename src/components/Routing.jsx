import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import About from './About'
import Wishlist from './Wishlist'
function Routing({shop,Filter,allcatefilter,cart,addtocart,setcart,wishlist,setwishlist,wishlistedids,setwishlistedids,removeproduct,addtocartpopup,setaddtocartpopup,hidePopup,sethidePopup,addtowishlist,removefromwishlist}) {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home
          addtocart={addtocart}
          wishlist={wishlist}
          setwishlist={setwishlist}
          wishlistedids={wishlistedids}
          setwishlistedids={setwishlistedids}
          addtocartpopup={addtocartpopup}
          setaddtocartpopup={setaddtocartpopup}
          hidePopup={hidePopup}
          sethidePopup={sethidePopup}/>}/>

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
    </Routes>
    </>
  )
}

export default Routing