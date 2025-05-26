import React from 'react';
import "./Checkout.css";
// import { useLocation } from 'react-router'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate=useNavigate()
  const location = useLocation();
  const { gtotal } = location.state || {};

  // for sending fname to orderdetails page
  // const [firstname, setfirstname] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function onAddressSubmit(data) {
    console.log("Address submitted:", data);
  }

  function onPaymentSubmit(data) {
    toast.success("Order placed successfully!");
    
    setTimeout(() => {
        navigate('/orderdetails', { state: { 
                                          firstname: data.firstname,
                                          gtotal:gtotal,
                                          housenumber:data.housenumber,
                                          appname:data.appname,
                                          saddress:data.saddress,
                                          city:data.city,
                                          state:data.state,
                                          pincode:data.pincode,
                                          phno:data.phno,
                                          email:data.email} });
    }, 3000);
     
  }
  return (
    <>
      <div className="paymentpage">
        <div className="paymentinfo">
          <h2>Delivery Address</h2>
          <h3 className='pd'>Personal Details:-</h3>
          <form onSubmit={handleSubmit(onAddressSubmit)}>
            <div className="form">
              <div className="inputss">
                <label>First Name:<span>*</span></label>
                <input
                  type="text"
                  {...register("firstname", {
                    required: "FirstName is required"
                  })}
                />
                {errors.firstname && <p className='error'>{errors.firstname.message}</p>}
              </div>

              <div className="inputss">
                <label>Last Name:<span>*</span></label>
                <input
                  type="text"
                  {...register("lastname", {
                    required: "LastName is required"
                  })}
                />
                {errors.lastname && <p className='error'>{errors.lastname.message}</p>}
              </div>

              <div className="inputss">
                <label>Contact Number:<span>*</span></label>
                <input
                  type="text"
                  {...register("phno", {
                    required: "Phone no. is required"
                  })}
                />
                {errors.phno && <p className='error'>{errors.phno.message}</p>}
              </div>

              <div className="inputss">
                <label>Email:<span>*</span></label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required"
                  })}
                />
                {errors.email && <p className='error'>{errors.email.message}</p>}
              </div>
            </div>

            <div className="adddetails">
              <h3>Address Details:-</h3>
              <div className="form2">
                <div className="inputss">
                  <label>House No:<span>*</span></label>
                  <input
                    type="text"
                    {...register("housenumber", {
                      required: "House no. is required"
                    })}
                  />
                  {errors.housenumber && <p className='error'>{errors.housenumber.message}</p>}
                </div>

                <div className="inputss">
                  <label>Apartment Name:<span>*</span></label>
                  <input
                    id="appname"
                    type="text"
                    {...register("appname", {
                      required: "Apartment Name is required"
                    })}
                  />
                  {errors.appname && <p className='error'>{errors.appname.message}</p>}
                </div>

                <div className="inputss">
                  <label>Street Name:<span>*</span></label>
                  <input
                    id="appname"
                    type="text"
                    {...register("saddress", {
                      required: "Street Address is required"
                    })}
                  />
                  {errors.saddress && <p className='error'>{errors.saddress.message}</p>}
                </div>

                <div className="inputss">
                  <label>Landmark:<span>*</span></label>
                  <input
                    type="text"
                    {...register("landmark", {
                      required: "Landmark is required"
                    })}
                  />
                  {errors.landmark && <p className='error'>{errors.landmark.message}</p>}
                </div>
              </div>

              <div className="form2">
                <div className="inputss">
                  <label>City:<span>*</span></label>
                  <input
                    type="text"
                    {...register("city", {
                      required: "City is required"
                    })}
                  />
                  {errors.city && <p className='error'>{errors.city.message}</p>}
                </div>

                <div className="inputss">
                  <label>State:<span>*</span></label>
                  <input
                    type="text"
                    {...register("state", {
                      required: "State is required"
                    })}
                  />
                  {errors.state && <p className='error'>{errors.state.message}</p>}
                </div>

                <div className="inputss">
                  <label>PinCode:<span>*</span></label>
                  <input
                    type="text"
                    {...register("pincode", {
                      required: "Pincode is required"
                    })}
                  />
                  {errors.pincode && <p className='error'>{errors.pincode.message}</p>}
                </div>
              </div>
            </div>

            <div className="adddddd">
              <button className='add-btnn'>Add Details</button>
            </div>
          </form>
        </div>

        <div className="payment">
          <div className="pay">
            <h2>Payment Options</h2>
          </div>

          <div className="boxes">
            <div className="lbox">
              <table>
                <tbody>
                  <tr><td className='paymentdd'><b>CC/DC</b></td></tr>
                  <tr><td className='paymentdd'>Netbanking</td></tr>
                  <tr><td className='paymentdd'>UPI</td></tr>
                  <tr><td className='paymentdd'>Wallet</td></tr>
                  <tr><td className='paymentdd'>Pay Later</td></tr>
                  <tr><td className='paymentdd'>COD</td></tr>
                </tbody>
              </table>
            </div>

            <div className="rbox">
              <div className="card">
                <h3>Enter Card Details</h3>
                <form onSubmit={handleSubmit(onPaymentSubmit)}>
                  <div className="details">
                    <label>Card Number:<span>*</span></label>
                    <input
                        className='inp'
                        maxLength={12}
                        {...register("cardnumber", {
                            required: "Card Number is required",
                            pattern: {
                            value: /^\d{12}$/,
                            message: "Invalid Card Number"
                            }
                        })}
                        onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                        }
                        }}
                        />
                    {errors.cardnumber && <p className='error'>{errors.cardnumber.message}</p>}

                    <div className="ccdetails">
                      <div className="dd1">
                        <label>Valid Thru:<span>*</span></label>
                        <input
                          type='month'
                          className='valid'
                          {...register("validthru", {
                            required: "Expiry date is required"
                          })}
                        />
                        {errors.validthru && <p className='error'>{errors.validthru.message}</p>}
                      </div>

                      <div className="dd2">
                        <label>CVV:<span>*</span></label>
                        <input
                          className='cvv'
                          maxLength={3}
                          {...register("cvv", {
                            required: "CVV is required",
                            pattern: {
                            value: /^\d{3}$/,
                            message: "Invalid Card Number"
                            }
                        })}
                          onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                        }
                        }}
                        />
                        {errors.cvv && <p className='error'>{errors.cvv.message}</p>}
                      </div>
                    </div>

                    <div className="paybttn">
                      <button className='ptp'>Proceed to Pay: $ {gtotal}</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-center" autoClose={3000} theme="dark" className="toaster"/>
    </>
  );
}

export default Checkout;