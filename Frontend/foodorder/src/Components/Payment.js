import Axios from "axios";
import React, { useState } from "react";
function Payment() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const makePaymentHandler = () => {
    Axios.post("http://localhost:5000/payment", {
      name: name,
      price: price,
      qty: qty,
    })
      .then(() => {
        alert("loged in success");
      })
      .catch("failed");
  };
  return (
    <div className="container">
      <div class="product">
        <img
          src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken-500x500.jpg"
          alt="biriyani"
          class="product_img"
        />
        <div class="description">
          <h3>
            Lunch at 12
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </h3>
          <h4 > price
            <input
              placeholder="enter price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </h4>
          <h4>
            quantity
            <input
              onChange={(e) => {
                setQty(e.target.value);
              }}
              placeholder="enter quantity"
            />
          </h4>
        </div>
        {/* <button className="btn-dark">Order</button> */}
        <button className="btn-dark" onClick={makePaymentHandler}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;
