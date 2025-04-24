import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
function Routing() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
    </Routes>
    </>
  )
}

export default Routing