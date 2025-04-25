import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom'
import Routing from './components/Routing'
import Fotter from './components/Fotter'
import Homeproducts from './components/Home-products'
import { useState } from 'react'
function App() {
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
      setsearch('')
    
  }
}
  
  return (
    <>
      <BrowserRouter>
        <Navbar search={search} setsearch={setsearch} searchproduct={searchproduct}/>
        <Routing shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>
        <Fotter />
      </BrowserRouter>
    </>
  )
}

export default App
