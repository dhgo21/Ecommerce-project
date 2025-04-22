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
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Fotter