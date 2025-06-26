
import express from "express";
import { createOrder, verifyPayment } from "../controllers/payments.controller.js";

const router = express.Router();
router.post("/create-order", createOrder); // ✅ use this path in Postman
router.post("/verify-payment", verifyPayment); // optional for future

export default router;
