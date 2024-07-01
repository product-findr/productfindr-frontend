import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();
    const sig = req.headers.get("Stripe-Signature");

    // Log the headers to debug
    console.log("Headers:", req.headers);

    if (!sig) {
      return NextResponse.json({ status: "Failed", error: "No stripe-signature header value was provided" }, { status: 400 });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
      console.error("Signature verification error:", err);
      return NextResponse.json({ status: "Failed", error: err }, { status: 400 });
    }

    const res = JSON.parse(payload);

    const dateTime = new Date(res?.created * 1000).toLocaleDateString();
    const timeString = new Date(res?.created * 1000).toLocaleTimeString();

    console.log("Event", event.type);
    console.log(
      res?.data?.object?.billing_details?.email, // email
      res?.data?.object?.amount, // amount
      JSON.stringify(res), // payment info
      res?.type, // type
      timeString, // time
      dateTime, // date
      res?.data?.object?.receipt_email, // email
      res?.data?.object?.receipt_url, // url
      JSON.stringify(res?.data?.object?.payment_method_details), // Payment method details
      JSON.stringify(res?.data?.object?.billing_details), // Billing details
      res?.data?.object?.currency // Currency
    );

    return NextResponse.json({ status: "success", event: event.type, response: res });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ status: "Failed", error }, { status: 500 });
  }
}
