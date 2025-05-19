import React, { useState } from 'react'
import "./Shop.css"
import { FaRegEye, FaRegHeart} from "react-icons/fa";
import { IoMdClose,IoMdHeart} from "react-icons/io";
function Shop({
    shop,
    Filter,
    allcatefilter,
    addtocart,
    wishlist,
    wishlistedids,
    setwishlistedids,
    setwishlist
    }) {
        
    const [showdetail,setshowdetail]=useState(false)
    const [detail,setdetail]=useState([])

    function detailpage(product) {
    setdetail(product);
    setshowdetail(true);
}

    function closedetail()
    {
        setshowdetail(false)
    }

    function addtowishlist(product)
  {
    const present=wishlist.find((x=>x.id===product.id))
    if(!present)
    {
      setwishlist([...wishlist,product])
      setwishlistedids(prev => [...prev, product.id]);
      alert("Product Added to Wishlist")
    }
  }

  function removefromwishlist(product)
  {
    setwishlist(wishlist.filter(item => item.id !== product.id));
    setwishlistedids(prev => prev.filter(id => id !== product.id));
    alert("Product Removed from Wishlist")
  }
    
  return (
    <>
    {
        showdetail ?
        <>
        <div className="productdetail">
            <button className='closebtn' onClick={closedetail}><IoMdClose /></button>
            <div className="container">
                <div className="imgbox">
                    <img src={detail.image}></img>
                </div>
                <div className="info">
                    <h4>{detail.cat}</h4>
                    <h2>{detail.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus excepturi sed cumque dicta? Debitis, accusantium consequatur omnis facere placeat porro. </p>
                    <h3>{detail.price}</h3>
                    <button onClick={()=>addtocart(detail)}>Add to Cart</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    <div className="shop">
        <h2>SHOP</h2>
        <p>Home . Shop </p>
        <div className="container">
            <div className="leftbox">
                <div className="category">
                    <div className="header">
                        <h3>All Categories</h3>
                    </div>
                    <div className="box">
                        <ul>
                            <li onClick={()=>allcatefilter()}>All</li>
                            <li onClick={()=>Filter("laptop")}>Laptops</li>
                            <li onClick={()=>Filter("drive")}>Drives</li>
                            <li onClick={()=>Filter("mobile")}>Mobiles</li>
                            <li onClick={()=>Filter("mouse")}>Mouse</li>
                            <li onClick={()=>Filter("speaker")}>Speakers</li>
                            <li onClick={()=>Filter("charger")}>Chargers</li>
                            <li onClick={()=>Filter("watche")}>Smart Watches</li>
                            <li onClick={()=>Filter("fans")}>Fans</li>
                            <li onClick={()=>Filter("Night Lamps")}>Night Lamps</li>
                        </ul>
                    </div>
                </div>
                <div className="banner">
                    <div className="img">
                        <img src='/images/bottombanner1.svg'></img>
                    </div>
                    <div className="slider">
                <div className="slides">
                  <div className="slide"><img src="/images/bottomrightslider.svg" alt="slide1"></img></div>
                  <div className="slide"><img src="/images/bottomrightslider1.svg" alt="slide2"></img></div>
                  <div className="slide"><img src="/images/bottomrightslider2.svg" alt="slide3"></img></div>
                  <div className="slide"><img src="/images/bottomrightslider3.svg" alt="slide4"></img></div>
                </div>
              </div>
                </div>
            </div>
            <div className="rightbox">
                <div className="topbanner">
                    <img src='/images/shoptopbanner.svg'></img>
                </div>
                <div className="productbox">
                    <h2 className='h'>Shop Product</h2>
                    <div className="productcontainer">
                        {
                            shop.map((curr,index)=>{
                                return (
                                        <div className="box" key={curr.id}>
                                            <div className="imgbox">
                                                <img src={curr.image} key={index} onClick={()=> detailpage(curr)}></img>
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
                                                <p>{curr.price}</p>
                                                <button onClick={()=>addtocart(curr)} className='btn '>Add To Cart</button>
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
    </>
  )
}
// 2.16
export default Shop