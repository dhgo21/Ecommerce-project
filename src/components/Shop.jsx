import React from 'react'
import "./Shop.css"
function Shop() {
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
                            <li>Laptops</li>
                            <li>Drives</li>
                            <li>Mobiles</li>
                            <li>Mouse</li>
                            <li>Speakers</li>
                            <li>Chargers</li>
                            <li>Smart Watches</li>
                            <li>Fans</li>
                            <li>Night Lamps</li>
                        </ul>
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