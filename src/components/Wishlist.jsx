import React, { useState } from 'react'
import "./Wishlist.css";
import { Link } from 'react-router-dom';
import { CiViewList } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
function Wishlist({wishlist,setwishlist,addtocart,setwishlistedids}) {

  const [showdetail, setshowdetail] = useState(false);
    const [detail, setdetail] = useState({});

  function removewhislistitems(product) {
    const exist = wishlist.find((x) => x.id === product.id);
    if (exist) {
      setwishlist(wishlist.filter((curr) => curr.id !== product.id));
      setwishlistedids(prev => prev.filter(id => id !== product.id));
    }
  }

  function detailpage(product)
    {
        const detaildata=([{product}])
        const productdetail=detaildata[0]['product']
        // console.log(productdetail);
        setdetail(productdetail)
        setshowdetail(true)
    }

    function closedetail()
    {
        setshowdetail(false)
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
    <div className="wishlist">
      <h1>Wishlist</h1>

  {wishlist.length === 0 ? (
    <div className="emptywishlist">
      <CiViewList className="list"/>
      <h2>Your Wishlist is Empty</h2>
      <Link to="/shop"><button>Shop Now</button></Link>
    </div>
  ) : (
    <div className="wishlistItems">
      {wishlist.map((item, index) => {
        return (
        <div className="whishbox" key={index}>
          <img src={item.image} onClick={() => detailpage(item)}/>
          <RxCross1 className='cross' onClick={() => removewhislistitems(item)}/>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
          <button className='btn ' onClick={()=>addtocart(item)}>Add To Cart</button>
        </div>
      )})}
    </div>
  )}
</div>
    </>
  )
}

export default Wishlist