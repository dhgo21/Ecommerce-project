import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Routing from './components/Routing'
import Fotter from './components/Fotter'
import Homeproducts from './components/Home-products'
import { useState } from 'react'
function App() {
  //add to cart
  const [cart,setcart]=useState([])

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
      alert("This product is already Added to cart")
    }
    else
    {
      setcart([...cart,{...product, qty:1}])
      alert("Product Added to Cart!.")
    }
  }
  console.log(cart); 
  return (
    <>
      <BrowserRouter>
        <Navbar search={search} setsearch={setsearch} searchproduct={searchproduct} cart={cart}/>
        <Routing setcart={setcart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
        <Fotter />
      </BrowserRouter>
    </>
  )
}

export default App
