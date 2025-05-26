import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Routing from './components/Routing'
import Fotter from './components/Fotter'
import Homeproducts from './components/Home-products'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  //add to cart
  const [cart,setcart]=useState([])


  const [addtocartpopup,setaddtocartpopup] =useState(false)
  const [hidePopup, sethidePopup] = useState(false);

 // add to wishlist
  const [wishlist,setwishlist]=useState([])
  const [wishlistedids, setwishlistedids] = useState([]);

  const [shop,setshop]=useState(Homeproducts)
  const [search,setsearch]=useState('')
  //shop category filter
  function Filter(x)
  {
    const catefilter=Homeproducts.filter((product)=>{
      return product.cat===x
    })
    setshop(catefilter)
  }

  function allcatefilter()
  {
    setshop(Homeproducts)
  }
  const searchlength=(search || []).length===0
  function searchproduct()
  {
  if(searchlength)
  {
    alert("Please Search Something")
    setshop(Homeproducts)
  }
  else
  {
      const searchfilter=Homeproducts.filter((x)=>{
      return x.cat===search
      })
      setshop(searchfilter)
      // setsearch('')
    
  }
}
  //add to cart
  function addtocart(product)
  {
    
    const exist=cart.find((x)=>{
      return x.id===product.id
    })
    if(exist)
    {
      toast.error("This Product is already in to Cart");
    }
    else
    {
      setcart([...cart,{...product, qty:1}])
      toast.success("Product is added to Cart");
      setaddtocartpopup(true)
      sethidePopup(false);
    }
  }
  
  
  return (
    <>
      <BrowserRouter>
        <Navbar search={search} setsearch={setsearch} searchproduct={searchproduct} cart={cart}/>
        <Routing setcart={setcart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} wishlist={wishlist} setwishlist={setwishlist} wishlistedids={wishlistedids} setwishlistedids={setwishlistedids} addtocartpopup={addtocartpopup} setaddtocartpopup={setaddtocartpopup} hidePopup={hidePopup} sethidePopup={sethidePopup} />
        <Fotter />
      </BrowserRouter>
      <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        theme="dark"
        className="toaster"/>
    </>
  )
}

export default App
