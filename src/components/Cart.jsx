import "./Cart.css";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

function Cart({ cart, setcart }) {


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

  const total = cart.reduce((price, item) => {
    const numericPrice = Number(item.price.replace(/[^0-9]/g, ""));
    return price + item.qty * numericPrice;
  }, 0);

  return (
    <>
      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 && (
          <div className="emptycart">
            <h2>Your Shopping Cart is Empty</h2>
            <Link to="/shop"><button>Shop Now</button></Link>
          </div>
        )}
        <div className="container">
          {cart.map((curr) => {
            const numericPrice = Number(curr.price.replace(/[^0-9]/g, ""));
            return (
              <div className="box" key={curr.id}>
                <div className="imgbox">
                  <img src={curr.image} alt={curr.name}></img>
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{curr.cat}</h4>
                    <h3>{curr.name}</h3>
                    <p>Price: {curr.price}</p>
                    <p>Total: ₹{numericPrice * curr.qty}</p>
                  </div>
                  <div className="quantity">
                    <button onClick={() => inqty(curr)}>+</button>
                    <input type="number" value={curr.qty} readOnly />
                    <button onClick={() => decqty(curr)}>-</button>
                  </div>
                  <div className="icon">
                    <li onClick={() => removeproduct(curr)}><IoMdClose /></li>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottom">
          {cart.length > 0 && (
            <div className="bottomwork">
              <div className="total">
                <h4>Sub Total: ₹{total}</h4>
              </div>
              <button>Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
