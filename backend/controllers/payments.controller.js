import createRazorPayInstance from "../config/razorpay.config.js";
import crypto from "crypto";
const razorPayInstance = createRazorPayInstance();

const createOrder = async (req, res) => {
  console.log("Incoming payment request >>>", req.body);

  // Do not accept amount like this from client
  const { courseId, amount } = req.body;

  //   checks

  if (!amount) {
    return res.status(400).json({
      success: false,
      message: "Amount is required",
    });
  }

  const options = {
    amount: amount * 100, // razor accept as 100.00 so if we send 100 it will change to 1.00 thats why we ae doing so
    currency: "INR",
    receipt: `receipt_order_1`,
  };

  try {
    razorPayInstance.orders.create(options, (err, order) => {
      console.log(err, "error");
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }

      return res.status(200).json(order);
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const verifyPayment = async (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  const secretKey = process.env.RAZORPAY_SECRET;

  //   create hmac object
  const hmac = crypto.createHmac("sha256", secretKey);

  hmac.update(order_id + "|" + payment_id);

  const generateSignature = hmac.digest("hex");

  if (generateSignature === signature) {
    return res.status(200).json({
      success: true,
      message: "Payment verified",
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "Payment not verified",
    });
  }
};

export  { createOrder, verifyPayment };
