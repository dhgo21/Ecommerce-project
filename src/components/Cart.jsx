import "./Cart.css";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { useState } from "react";
import Fotter from "../components/Fotter"
function Cart({ cart, setcart }) {

    const [showdetail, setshowdetail] = useState(false);
        const [detail, setdetail] = useState({});
  
  function inqty(product) {
    const exist = cart.find((x) => x.id === product.id);
    setcart(cart.map((curr) => {
      return curr.id === product.id ? { ...exist, qty: exist.qty + 1 } : curr;
    }));
  }

  function decqty(product) {
    const exist = cart.find((x) => x.id === product.id);
    if (exist && exist.qty > 1) {
      setcart(cart.map((curr) => {
        return curr.id === product.id ? { ...exist, qty: exist.qty - 1 } : curr;
      }));
    } else {
      alert("Minimum quantity reached");
    }
  }

  function removeproduct(product) {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty > 0) {
      setcart(cart.filter((curr) => curr.id !== product.id));
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
    const totalCartPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const totalamount=totalCartPrice+2+123
    const gst = 123;
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
                    </div>
                </div>
            </div>
            </>
            : null
        }
      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 && (
          <div className="emptycart">
            <IoCart className="emptycart"/>
            <h2>Your Shopping Cart is Empty</h2>
            <Link to="/shop"><button>Shop Now</button></Link>
          </div>
        )}
        <div className="container">
          <div className="leftbox">
          {cart.map((curr) => {
            const totalPrice = curr.price * curr.qty;
            return (
              <>
                <div className="box" key={curr.id}>
                  <div className="imgbox">
                    <img src={curr.image} onClick={() => detailpage(curr)}></img>
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h4>{curr.cat}</h4>
                      <h3>{curr.name}</h3>
                      <p>Price ({curr.qty} Quantity): ${totalPrice}</p>
                    </div>
                    <div className="quantity">
                      <button onClick={() => decqty(curr)}>-</button>
                      <input type="number" value={curr.qty} readOnly />
                      <button onClick={() => inqty(curr)}>+</button>
                    </div>
                    <div className="icon">
                      <li onClick={() => removeproduct(curr)}><IoMdClose /></li>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          </div>
          {
            cart.length>0 && (
              <div className="rightbox">
                <div className="rightboxheading">
                  <span>PRICE DETAILS</span>
                </div>
                <div className="pricedetails">
                  <table>
                    <tbody>
                      <tr>
                        <td>Price ({cart.length} item)</td>
                        <td>${totalCartPrice}</td>
                      </tr>
                      <tr>
                        <td>GST 18%:</td>
                        <td> ${gst}</td>
                      </tr>
                      <tr>
                        <td>Packaging Fee</td>
                        <td>$2</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="totalprice">
                    <table>
                      <tbody>
                        <tr>
                          <td>Total Amount</td>
                          <td>${totalamount}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="checkout">
                  <Link to="/checkout" state={{ gtotal:  totalamount}} ><button>Checkout</button></Link>
                </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <Fotter />
    </>
  );
}

export default Cart;
