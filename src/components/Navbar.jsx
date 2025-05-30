import React from 'react'
import { FaShippingFast, FaSearch, FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css"
import { BsCart4 } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import Badge from '@mui/material/Badge';
import { MdOutlineLocationOn } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { CiShop } from "react-icons/ci";
import { LuInfo } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePermContactCalendar } from "react-icons/md";
function Navbar({search,setsearch,searchproduct,cart}) {
    const { loginWithRedirect, logout,user, isAuthenticated} = useAuth0();

  return (
    <>
    <div className="header">
        <div className="topheader">
            <div className="icon">
            <FaShippingFast />
            </div>
            <div className="info">
                <marquee>Free Shipping on shopping above ₹700</marquee>
            </div>
        </div>
        <div className="midheader">
            <div className="logo">
                <img src="/images/smlogo.png"></img>
            </div>
            <div className="pincode">
                <p>Deliver to</p>
                <div className="setting">
                <MdOutlineLocationOn className='locicon'/> <select id="countries">
                    <option>Agra</option>
                    <option>Banglore</option>
                    <option>Chandigarh</option>
                    <option>Dehradun</option>
                    <option>Etawa</option>
                </select>
                </div>
            </div>
            <div className="searchbox">
                <input type="text" value={search} placeholder='Search' onChange={(e)=>setsearch(e.target.value)}></input>
                <button onClick={searchproduct}><FaSearch /></button>
            </div>
            <div className="carticon">
                <Badge badgeContent={cart.length} color="primary" className='badge'>
                    <Link to="/cart" ><BsCart4 className='cartlogo'/></Link>
                </Badge>
            </div>
            {
                isAuthenticated ? 
                <div className="user">
                <div className="icon">
                    <CiLogout />
                </div>
                <div className="bttn">
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            </div>
            :
            <div className="user">
                <div className="icon">
                    <LuLogIn />
                </div>
                <div className="bttn">
                    <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
            }
        </div>
        <div className="lastheader">
            <div className="userprofile">
            {   
                isAuthenticated ?
                <>
                <div className="user">
                    <FaUser />
                </div>
                <div className="info">
                    <h4>{user.name}</h4>
                    <h6>{user.email}</h6>
                </div>
                </>
                :
                <>
                <div className="user">
                    <FaUser />
                </div>
                <div className="info">
                    <p>Please Login</p>
                </div>
                </>
            }
            </div>
            <div className="nav">
                <ul>
                    <li><Link to="/" className="link"><div className='nav1'><GoHome />Home</div></Link></li>
                    <li><Link to="/shop" className="link"><div className='nav1'><CiShop />Shop</div></Link></li>
                    <li><Link to="/about" className="link"><div className='nav1'><LuInfo />About</div></Link></li>
                    <li><Link to="/wishlist" className="link"><div className='nav1'><CiHeart />Wishlist</div></Link></li>
                    <li><Link to="https://forms.gle/jdKt75N1EBRGHPW3A" target="_black" className="link"><div className='nav1'><MdOutlinePermContactCalendar />Contact Us</div></Link></li>
                </ul>
            </div>
            <div className="offer">
                <p>Flat 10% over all Mobiles</p>
            </div>
        </div>
    </div>
    </>
  )
}
// https://forms.gle/jdKt75N1EBRGHPW3A
export default Navbar