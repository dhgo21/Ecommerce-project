import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router'
import Homeproducts from './Home-products'
import { FaRegEye, FaRegHeart, FaFacebook, FaTwitterSquare, FaInstagram, FaYoutube  } from "react-icons/fa";;
import { IoCartOutline } from "react-icons/io5";
function Home() {
  // product category
  const [newproduct,setnewproduct]=useState([])
  const [featureproduct,setfeatureproduct]=useState([])
  const [topproduct,settopproduct]=useState([])
  //trending product
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



  //product type
  useEffect(()=>{
    productcategory()
  })
  function productcategory()
  { 

    // new product
    const newcategory=Homeproducts.filter((curr)=>{
      return curr.type==="new"
    })
    setnewproduct(newcategory)

    // feature product
    const featurecategory=Homeproducts.filter((curr)=>{
      return curr.type==="feature"
    })
    setfeatureproduct(featurecategory)

    // top product
    const topcategory=Homeproducts.filter((curr)=>{
      return curr.type==="top"
    })
    settopproduct(topcategory)
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
              <button className='showmorebttn'>Show More</button>
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
        <div className="banners">
          <div className="container">
            <div className="leftbox">
              <div className="box">
                <img src='/public/images/sliderimg1.svg'></img>
              </div>
              <div className="box">
                <img src='/public/images/sliderimg2.svg'></img>
              </div>
            </div>
            <div className="rightbox">
              <div className="top">
                <img src='/public/images/sliderimg3.svg'></img>
                <img id="sliderimg4"src='/public/images/sliderimg4.svg'></img>
              </div>
              <div className="bottom">
                <img src='/public/images/sliderimg5.svg'></img>
                <img id="slider6" src='/public/images/sliderimg6.png'></img>
              </div>
            </div>
          </div>
        </div>
        <div className="producttype">
          <div className="container">
            <div className="box">
              <div className="header"> 
                <h2>New Product</h2>
              </div>
              {
                newproduct.map((curr)=>{
                  return(
                    <>
                      <div className="productbox">
                        <div className="imgbox">
                          <img src={curr.image}></img>
                        </div>
                        <div className="detail">
                          <h3>{curr.name}</h3>
                          <p>{curr.price}</p>
                          <div className="icons">
                            <button><FaRegEye /></button>
                            <button><FaRegHeart /></button>
                            <button><IoCartOutline /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div className="box">
              <div className="header"> 
                <h2>Featured Product</h2>
              </div>
              {
                featureproduct.map((curr)=>{
                  return(
                    <>
                      <div className="productbox">
                        <div className="imgbox">
                          <img src={curr.image}></img>
                        </div>
                        <div className="detail">
                          <h3>{curr.name}</h3>
                          <p>{curr.price}</p>
                          <div className="icons">
                            <button><FaRegEye /></button>
                            <button><FaRegHeart /></button>
                            <button><IoCartOutline /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div className="box">
              <div className="header"> 
                <h2>Top Product</h2>
              </div>
              {
                topproduct.map((curr)=>{
                  return(
                    <>
                      <div className="productbox">
                        <div className="imgbox">
                          <img src={curr.image}></img>
                        </div>
                        <div className="detail">
                          <h3>{curr.name}</h3>
                          <p>{curr.price}</p>
                          <div className="icons">
                            <button><FaRegEye /></button>
                            <button><FaRegHeart /></button>
                            <button><IoCartOutline /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home