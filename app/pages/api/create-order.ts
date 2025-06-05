import Razorpay from "razorpay";
import type { NextApiRequest, NextApiResponse } from "next";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const payment_capture = 1;
  const amount = 100; // ₹299 x 100
  const currency = "INR";

  try {
    const options = {
      amount,
      currency,
      receipt: `receipt_${Date.now()}`,
      payment_capture,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
