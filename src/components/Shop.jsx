import React from 'react'
import "./Shop.css"
import { FaRegEye, FaRegHeart} from "react-icons/fa";
function Shop({shop,Filter,allcatefilter}) {
  return (
    <>
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
                        <img src='/public/images/bottombanner1.svg'></img>
                    </div>
                </div>
            </div>
            <div className="rightbox">
                <div className="topbanner">
                    <img src='/public/images/shoptopbanner.svg'></img>
                </div>
                <div className="productbox">
                    <h2>Shop Product</h2>
                    <div className="productcontainer">
                        {
                            shop.map((curr,index)=>{
                                return (
                                    <>
                                        <div className="box">
                                            <div className="imgbox">
                                                <img src={curr.image} key={index}></img>
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
        </div>
    </div>
    </>
  )
}
// 2.16
export default Shop