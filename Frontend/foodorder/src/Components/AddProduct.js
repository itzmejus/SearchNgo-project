import React, { useState } from "react";
import Axios from "axios";
function AddProduct() {
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
    <div class="container-sm">
      <div class="form-group">
        <label class="col-md-4 control-label">PRODUCT ID</label>
        <div class="col-md-4">
          <input
            id="product_id"
            name="product_id"
            placeholder="PRODUCT ID"
            class="form-control input-md"
            required=""
            type="text"
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">PRODUCT CATEGORY</label>
        <div class="col-md-4">
          <input
            id="product_id"
            name="product_id"
            placeholder="PRODUCT Category"
            class="form-control input-md"
            required=""
            type="text"
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>
      </div>
      {/* <!-- Text input--> */}
      <div class="form-group">
        <label class="col-md-4 control-label">PRODUCT NAME</label>
        <div class="col-md-4">
          <input
            id="product_name"
            name="product_name"
            placeholder="PRODUCT NAME"
            class="form-control input-md"
            required=""
            type="text"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
      </div>
      {/* <!-- Text input--> */}
      <div class="form-group">
        <label class="col-md-4 control-label">PRODUCT DESCRIPTION</label>
        <div class="col-md-4">
          <textarea
            id="product_name_fr"
            name="product_name_fr"
            placeholder="ENTER PRODUCT DESCRIPTION"
            class="form-control input-md"
            required=""
            type="text"
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button className="btn-dark" onClick={addProductHandler}>
        ADD PRODUCT
      </button>
    </div>
  );
}

export default AddProduct;
