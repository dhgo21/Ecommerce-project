import React from 'react'
import "./Fotter.css"
import { GiPiggyBank } from "react-icons/gi";
import { FaShippingFast, FaWallet } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
function Fotter() {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="leftbox">
                <div className="box">
                    <div className="iconbox">
                        <GiPiggyBank />
                    </div>
                    <div className="detail">
                        <h3>Great Savings</h3>
                        <p>Save money, live better</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconbox">
                        <FaShippingFast />
                    </div>
                    <div className="detail">
                        <h3>Free Delivery</h3>
                        <p>Enjoy fast, free delivery today!</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconbox">
                        <MdOutlineSupportAgent />
                    </div>
                    <div className="detail">
                        <h3>24x7 Support</h3>
                        <p>Reliable 24x7 support ensures continuity.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconbox">
                        <FaWallet />
                    </div>
                    <div className="detail">
                        <h3>Money Cashback</h3>
                        <p>Money cashback rewards smart spending.</p>
                    </div>
                </div>
            </div>
            <div className="rightbox">
                <div className="top">
                    <div className="logo">
                        <img src='/public/images/smlogo.png'></img>
                    </div>
                    <div className="para">
                        <p>Shop smarter, not harder. We bring clean design, quality choices, and a seamless experience—so you get what you need, and nothing you don’t.</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="account">
                        <h4>Your Account</h4>
                        <p>About Us</p>
                        <p>Account</p>
                        <p>Payment</p>
                        <p>Sales</p>
                    </div>
                    <div className="Products">
                        <h4>Products</h4>
                        <p>Delivery</p>
                        <p>Track Order</p>
                        <p>New Product</p>
                        <p>Old product</p>
                    </div>
                    <div className="contact">
                        <h4>Contact Us</h4>
                        <p>Jaipur, India</p>
                        <p>+91 0101010101</p>
                        <p>swiftmart@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Fotter