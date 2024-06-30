import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_7Ja5H6YOybOol7TGm8vDtEo700ZiEZK2xd");

// Define your formatAmountForStripe and CURRENCY constants/functions
const formatAmountForStripe = (amount: number, currency: string) => {
  // Your formatting logic here
  return amount; // example, assuming amount is already in the correct format
};
const CURRENCY = "usd";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const amount = req.body.amount;

      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "donate",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: CURRENCY,
              product_data: {
                name: "Custom amount donation",
              },
              unit_amount: formatAmountForStripe(amount, CURRENCY),
            },
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      };

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
