// File: pages/api/create-order.ts

import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" }); // 🛑 405 handled here
  }

  const payment_capture = 1;
  const amount = 100; // ₹299 in paise
  const currency = "INR";

  try {
    const options = {
      amount,
      currency,
      receipt: `receipt_order_${Date.now()}`,
      payment_capture,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
