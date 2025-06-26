import React, { useEffect } from 'react';
import "./Checkout.css";
// import { useLocation } from 'react-router'
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
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

  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);
}, []);


  async function onPaymentSubmit(data) {
  // Backend call to get order_id
  // if running on local host then "http://localhost:4000/api/create-order"
  // if running on render website then "https://ecommerce-project-9tt9.onrender.com/api/create-order"
  const res = await fetch("https://ecommerce-project-9tt9.onrender.com/api/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: gtotal })
    
  });

  const orderData = await res.json();

  const options = {
    key: "rzp_test_hpgrwPm2cAepNP", // Replace with your Razorpay key
    amount: orderData.amount, 
    currency: orderData.currency,
    name: "My Store",
    description: "Purchase Description",
    image: "https://example.com/logo.png",
    order_id: orderData.id,
    handler: function (response) {
      // On successful payment
      setTimeout(() => {
        navigate("/orderdetails", {
          state: {
            firstname: data.firstname,
            gtotal: gtotal,
            housenumber: data.housenumber,
            appname: data.appname,
            saddress: data.saddress,
            city: data.city,
            state: data.state,
            pincode: data.pincode,
            phno: data.phno,
            email: data.email,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }
        });
      }, 1000);
    },
    prefill: {
      name: data.firstname,
      email: data.email,
      contact: data.phno,
    },
    notes: {
      address: `${data.housenumber}, ${data.appname}, ${data.saddress}, ${data.city}`
    },
    theme: {
      color: "#3399cc"
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

  
}
  return (
    <>
      <div className="paymentpage">
        <div className="paymentinfo">
          <h2>Delivery Address</h2>
          <h3 className='pd'>Personal Details:-</h3>
          <form onSubmit={handleSubmit(onPaymentSubmit)}>
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
              <button className='ptp'>Proceed to Pay: $ {gtotal}</button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position="bottom-center" autoClose={3000} theme="dark" className="toaster"/>
    </>
  );
}

export default Checkout;
