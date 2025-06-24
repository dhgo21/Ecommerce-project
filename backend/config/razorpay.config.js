


import dotenv from "dotenv";
dotenv.config(); // ✅ force load environment variables

import Razorpay from "razorpay";

console.log("RAZORPAY_ID:", process.env.RAZORPAY_ID);

const createRazorPayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });
};

export default createRazorPayInstance;
