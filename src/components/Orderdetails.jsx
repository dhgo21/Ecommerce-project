import React from 'react'
import "./Orderdetails.css"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Orderdetails({cart}) {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const gst = 123;
    const packfee=2
    const totalWithGST = subtotal + gst;

    const location = useLocation();
    const firstname = location.state?.firstname || 'Guest';
    const housenumber=location.state?.housenumber || "Guest"
    const appname=location.state?.appname || "Guest"
    // const saddress = location.state?.saddress || 'Guest';
    const city=location.state?.city || "Guest"
    const state=location.state?.state || "Guest"
    const pincode = location.state?.pincode || 'Guest';
    const phno=location.state?.phno || "Guest"
    const email=location.state?.email || "Guest"
    // const gtotal = location.state?.gtotal || "Guest"
  return (
    <>
    <div className="orderdetails">
        <div className="wbox">
            <div className="tophead">
                <div className="head-top">
                    <h3>Thanks for your order, {firstname}</h3>
                </div>
            </div>
            <div className="reciept">
                <div className="left">
                    <p>Here, is your Order Details</p>
                </div>
                <div className="right">
                    <p>Order Id: 000acbcd12</p>
                </div>
            </div>
            <div className="orderpro">
                {
                    cart.map((curr)=>{
                        return (
                            <>
                                <div className="inforrrr">
                                    <div className="topdiv">
                                        <img src={curr.image}></img>
                                        <p>{curr.name}</p>
                                        <p>{curr.cat}</p>
                                        <p>Qty: {curr.qty}</p>
                                        <p>${curr.price*curr.qty}</p>
                                    </div>
                                    <div className="bottomdiv">
                                        <div className="track">
                                            <p>Track Order:</p>
                                        </div>
                                        <div className="timeline">
                                            <div className="toppp">
                                                <div className="progress-bar" style={{ width: '7%' }}></div>
                                            </div>
                                            <div className="bottomm">
                                                <h6 className='infor'>Order Recieved</h6>
                                                <h6 className='infor'>Shipped</h6>
                                                <h6 className='infor'>Out for Delivery</h6>
                                                <h6 className='infor'>Delivered</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        <div className="orderinfor">
            <div className="topheadings">
                <div className="shipadd">
                    <p>Shipping Address</p>
                </div>
                <div className="shipinfo">
                    <p className='fname'>{firstname}</p>
                    <p className='shipaddress'>{housenumber}</p>
                    <p className='shipaddress'>{appname}</p>
                    <p className='shipaddress'>{city}</p>
                    <p className='shipaddress'>{state} - {pincode}</p>
                    <p className='shipaddress'>Phone number: {phno}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
            <div className="bottomheadings">
                <div className="shipadd">
                    <p>Price Details</p>
                </div>
                <div className="priceinfo">
                    <table className='table2'>
                        <tbody className='tbody2'>
                            <tr className='total-pay'>
                                <td className='total-pay2'>Total:</td>
                                <td className='totalpay3'> ${subtotal.toFixed(2)}</td>
                            </tr>
                            <tr className='total-pay'>
                                <td className='total-pay2'>GST 18%:</td>
                                <td className='totalpay3'> ${gst}</td>
                            </tr>
                            <tr className='total-pay'>
                                <td className='total-pay2'>Packaging Fee: </td>
                                <td className='totalpay3'>${packfee}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="totalpaid">
                        <table>
                            <tbody>
                        <tr>
                            <td className='totalpay1'>Total Paid:</td>
                            <td className='totalpay'>${totalWithGST.toFixed(2)}</td>
                        </tr>
                        </tbody>
                        </table>    
                    </div>
                </div>
                
            </div>
            <Link to="/"><button className='home-bttn'>Back to Home</button></Link>
        </div>
    </div>
    </>
    
  )
}

export default Orderdetails