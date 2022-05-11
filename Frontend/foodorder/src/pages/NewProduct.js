import "../Styles/newProduct.css";
import React, { useState } from "react";
import Axios from "axios";
export default function NewProduct() {
  const [productId, setProductId] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const addProductHandler = () => {
    Axios.post("http://localhost:5000/admin/addproduct", {
      productId: productId,
      productCategory: productCategory,
      productName: productName,
      productDescription: productDescription,
    })
      .then(() => {
        alert("added successfully");
      })
      .catch("failed");

    console.log(productId);
  };
  return (
    <div className="newProduct" style={{ marginLeft: "110px" }}>
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        {/* <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div> */}
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="PRODUCT NAME "
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>PRODUCT CATEGORY</label>
          <input
            type="text"
            placeholder="PRODUCT CATEGORY"
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Product ID</label>
          <input
            type="text"
            placeholder="123"
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Product DESCRIPTION</label>
          <input
            type="text"
            placeholder="ENTER PRODUCT DESCRIPTION"
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <button className="addProductButton" onClick={addProductHandler}>
          Create
        </button>
      </form>
    </div>
  );
}
