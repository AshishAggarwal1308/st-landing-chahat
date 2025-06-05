export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const openRazorpayCheckout = async (
  user: { name: string; email: string; phone: string },
  onSuccess: (paymentId: string) => void
) => {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const res = await fetch("/api/create-order", { method: "POST" });
  const data = await res.json();

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    amount: data.amount,
    currency: data.currency,
    name: "StockTutor",
    description: "Algo Trading Masterclass",
    order_id: data.id,
    handler: function (response: any) {
      onSuccess(response.razorpay_payment_id);
    },
    prefill: {
      name: user.name,
      email: user.email,
      contact: user.phone,
    },
    theme: {
      color: "#0f766e",
    },
  };

  const rzp = new (window as any).Razorpay(options);
  rzp.open();
};
