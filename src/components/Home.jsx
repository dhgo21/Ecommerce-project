import React, { useState } from 'react'
import "./Home.css"
import { Link } from 'react-router'
import Homeproducts from './Home-products'
import { FaRegEye, FaRegHeart, FaFacebook, FaTwitterSquare, FaInstagram, FaYoutube  } from "react-icons/fa";;
function Home() {
  const [tproducts,settproducts]=useState(Homeproducts)
  function filtercate(x)
  {
    const filterproduct=Homeproducts.filter((curr)=>{
      return curr.type===x
    })
    settproducts(filterproduct)
  }

  function aaproducts()
  {
    settproducts(Homeproducts)
  }
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
                  <h2 onClick={()=>aaproducts()}>Trending Products</h2>
                </div>
                <div className="cate">
                  <h3 onClick={()=>filtercate('new')}>New</h3>
                  <h3 onClick={()=>filtercate('feature')}>Featured</h3>
                  <h3 onClick={()=>filtercate('top')}>Top selling</h3>
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
                    <div className="icon">
                      <div className="iconbox">
                        <FaRegEye />
                      </div>
                      <div className="iconbox">
                        <FaRegHeart />
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <h4>{curr.name}</h4>
                    <p>{curr.price}</p>
                    <button className='btn '>Add To Cart</button>
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
            <div className="container">
              <div className="testimonial">
                <div className="head">
                  <h3>Our Testimonial</h3>
                </div>
                <div className="detail">
                  <div className="imgbox">
                    <img src="/public/images/testimonial.png" alt="testimonial"></img>
                  </div>
                  <div className="info">
                    <h3>Abcd</h3>
                    <h4>Web Developer</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quisquam veritatis qui quam inventore, nostrum excepturi rerum repudiandae, accusantium asperiores ad est temporibus pariatur quibusdam sapiente illum porro, illo optio.</p>
                  </div>
                </div>
              </div>
              <div className="newsletter">
                <div className="heading">
                  <h3>Newsletter</h3>
                </div>
                <div className="detail">
                  <p>Join Our Community</p>
                  <div className="inputbox">
                    <input placeholder='E-mail'></input>
                  </div>
                  <div className="subscribe">
                    <button>Subscribe</button>
                  </div>
                  <div className="media">
                    <FaFacebook />
                    <FaTwitterSquare />
                    <FaInstagram />
                    <FaYoutube />
                  </div>
                </div>
              </div>
              <div className="slider">
                <div className="slides">
                  <div className="slide"><img src="/public/images/bottomrightslider.svg" alt="slide1"></img></div>
                  <div className="slide"><img src="/public/images/bottomrightslider1.svg" alt="slide2"></img></div>
                  <div className="slide"><img src="/public/images/bottomrightslider2.svg" alt="slide3"></img></div>
                  <div className="slide"><img src="/public/images/bottomrightslider3.svg" alt="slide4"></img></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home