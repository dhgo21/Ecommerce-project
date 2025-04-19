import React, { useState } from 'react'
import "./Home.css"
import { Link } from 'react-router'
import Homeproducts from './Home-products'
function Home() {
  const [tproducts,settproducts]=useState(Homeproducts)
  return (
    <>
    <div className="home">
        <div className="topbanner">
            <div className="contant">
            <h3>New Arrivals</h3>
            <h2>Trendy Gadgets Just for You</h2>
            <p>Get 30% off on your first purchase</p>
            <Link to="/shop"className='link'>Shop Now!</Link>
            </div>
        </div>
        <div className="trending">
        <div className="container">
          <div className="leftbox">
            <div className="header">
              <div className="heading">
                <h2>Trending Products</h2>
              </div>
              <div className="cate">
                <h3>New</h3>
                <h3>Featured</h3>
                <h3>Top selling</h3>
              </div>
            </div>
            <div className="products">
              <div className="container">
              {
            tproducts.map((curr)=>{
              return(
                <>
                <div className="box">
                  <div className="imgbox">
                    <img src={curr.image} alt=''></img>
                  </div>
                </div>
                </>
              )
            })
          }    
              </div>
            </div>
          </div>
          <div className="rightbox">
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home