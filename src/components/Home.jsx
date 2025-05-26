import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Homeproducts from './Home-products'
import { FaRegEye, FaRegHeart, FaFacebook, FaTwitterSquare, FaInstagram, FaYoutube  } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose, IoMdHeart } from "react-icons/io";
import Fotter from "../components/Fotter"
import { ToastContainer, toast } from 'react-toastify';
function Home({addtocart,wishlist,setwishlist,wishlistedids,setwishlistedids}) {
  const [showdetail, setshowdetail] = useState(false);
  const [detail, setdetail] = useState({});


  // addto cart popup
  
  // product category
  const [newproduct,setnewproduct]=useState([])
  const [featureproduct,setfeatureproduct]=useState([])
  const [topproduct,settopproduct]=useState([])

  // for paging
  const [visibleCount, setVisibleCount] = useState(12);
  //trending product
  const [tproducts,settproducts]=useState(Homeproducts)
  function filtercate(x)
  {
    const filterproduct=Homeproducts.filter((curr)=>{
      return curr.type===x
    })
    settproducts(filterproduct)
    setVisibleCount(4)
  }

  function aaproducts()
  {
    settproducts(Homeproducts)
    setVisibleCount(12)
  }



  //product type
  useEffect(()=>{
    productcategory()
  },[])




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
  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 12); // increase count by 12 each time
  };
  const visibleproducts = tproducts.slice(0, visibleCount);

  function detailpage(product) {
    setdetail(product);
    setshowdetail(true);
  }

  // add to wishlist
  function addtowishlist(product)
  {
    const present=wishlist.find((x=>x.id===product.id))
    if(!present)
    {
      setwishlist([...wishlist,product])
      setwishlistedids(prev => [...prev, product.id]);
      toast.success("Product added to Wishlist");
    }
  }

  function removefromwishlist(product)
  {
    setwishlist(wishlist.filter(item => item.id !== product.id));
    setwishlistedids(prev => prev.filter(id => id !== product.id));
    toast.warn("Product removed from Wishlist");
  }

  // function handleokay()
  // {
  //   setaddtocartpopup(false)
  // }
  return (
    <>
    {
          showdetail && (
          <div className="productdetail">
            <button className='closebtn' onClick={() => setshowdetail(false)}><IoMdClose /></button>
            <div className="container">
              <div className="imgbox">
                <img src={detail.image} alt="Product" />
              </div>
              <div className="info">
                <h4>{detail.cat}</h4>
                <h2>{detail.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus excepturi sed cumque dicta?</p>
                <h3>${detail.price}</h3>
                <button onClick={() => addtocart(detail)}>Add to Cart</button>
              </div>
            </div>
          </div>
        )
    }
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
            visibleproducts.map((curr)=>{
              return(
                <div className="box" key={curr.id}> 
                  <div className="imgbox">
                      <img src={curr.image} alt='' onClick={() => detailpage(curr)}></img>
                    <div className="icon">

                      <div className="iconbox" onClick={() => {
                        wishlist.some(item => item.id === curr.id)
                          ? removefromwishlist(curr)
                          : addtowishlist(curr);
                        }}>
                        {wishlistedids.includes(curr.id) ? (<IoMdHeart/> ): (<FaRegHeart/>)}                  
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <h4>{curr.name}</h4>
                    <p>${curr.price}</p>
                    <button className='btn ' onClick={()=>addtocart(curr)}>Add To Cart</button>
                  </div>
                </div>
              )
            })
            }    
            </div>
              {
                visibleCount < Homeproducts.length ? (
                  <button className='showmorebttn' onClick={handleShowMore}>Show More</button>
                ) : (
                  <button className='showmorebttn' onClick={() => setVisibleCount(12)}>Show Less</button>
                )
              }
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
                    <img src="/images/testimonial.png" alt="testimonial"></img>
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
              <div className="sliders">
                <div className="slidess">
                  <div className="slidesss"><img src="/images/bottomrightslider.svg" alt="slide1"></img></div>
                  <div className="slidesss"><img src="/images/bottomrightslider1.svg" alt="slide2"></img></div>
                  <div className="slidesss"><img src="/images/bottomrightslider2.svg" alt="slide3"></img></div>
                  <div className="slidesss"><img src="/images/bottomrightslider3.svg" alt="slide4"></img></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="leftbox">
              <div className="box">
                <img src='/images/sliderimg1.svg'></img>
              </div>
              <div className="box">
                <img src='/images/sliderimg2.svg'></img>
              </div>
            </div>
            <div className="rightbox">
              <div className="top">
                <img src='/images/sliderimg3.svg'></img>
                <img id="sliderimg4"src='/images/sliderimg4.svg'></img>
              </div>
              <div className="bottom">
                <img src='/images/sliderimg5.svg'></img>
                <img id="slider6" src='/images/sliderimg6.png'></img>
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
                      <div className="productbox" key={curr.id}>
                        <div className="imgbox">
                          <img src={curr.image}  onClick={() => detailpage(curr)} ></img>
                        </div>
                        <div className="detail">
                          <h3>{curr.name}</h3>
                          <p>${curr.price}</p>
                          <div className="icons">
                            <div className="iconbox" onClick={() => {
                              wishlist.some(item => item.id === curr.id)
                              ? removefromwishlist(curr)
                              : addtowishlist(curr);
                              }}>
                              {wishlistedids.includes(curr.id) ? (<IoMdHeart className='whish'/> ): (<FaRegHeart className='whish'/>)}                  
                            </div>
                            <div className="iconbox">
                              <IoCartOutline className='button'onClick={()=>addtocart(curr)}/>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <div className="productbox" key={curr.id}>
                        <div className="imgbox">
                          <img src={curr.image} onClick={() => detailpage(curr)}></img>
                        </div>
                        <div className="detail">
                          <h3>{curr.name}</h3>
                          <p>${curr.price}</p>
                          <div className="icons">
                            <div className="iconbox" onClick={() => {
                              wishlist.some(item => item.id === curr.id)
                              ? removefromwishlist(curr)
                              : addtowishlist(curr);
                              }}>
                              {wishlistedids.includes(curr.id) ? (<IoMdHeart className='whish'/> ): (<FaRegHeart className='whish'/>)}                  
                            </div>
                            <div className="iconbox">
                              <IoCartOutline className='button'onClick={()=>addtocart(curr)}/>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <div className="productbox" key={curr.id}>
                        <div className="imgbox">
                          <img src={curr.image} onClick={() => detailpage(curr)}></img>
                        </div>
                        <div className="detail">
                          <h3>{curr.name}</h3>
                          <p>${curr.price}</p>
                          <div className="icons">
                            <div className="iconbox" onClick={() => {
                              wishlist.some(item => item.id === curr.id)
                              ? removefromwishlist(curr)
                              : addtowishlist(curr);
                              }}>
                              {wishlistedids.includes(curr.id) ? (<IoMdHeart className='whish'/> ): (<FaRegHeart className='whish'/>)}                  
                            </div>
                            <div className="iconbox">
                              <IoCartOutline className='button'onClick={()=>addtocart(curr)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <Fotter />
    </>
  )
}

export default Home