import AddProductModel from "../models/AddProductModel.js";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51KnFT8SE6HzENAp2KDALckWbBoNfpDIqj2gMnf4LTE7y8ybluWqZjAJfyFGUe7jkuSGqLjKRMjACmhPqcaUUgL2z001rIk16GD"
);

export const MakePaymentController = async (req, res) => {
  console.log(req.body);
  const { product } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: product.name,
          },
          unit_amount: product.amount * 100,
        },
        quantity: product.quantity,
      },
    ],
    mode: "payment",
    success_url: "https://www.google.co.in/",
    cancel_url: "https://www.youtube.com/watch?v=0WM0YL8tKp4",
  });
  // console.log(product);
};
