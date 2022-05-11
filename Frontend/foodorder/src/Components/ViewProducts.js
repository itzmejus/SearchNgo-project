import Axios from "axios";
import React, { useEffect, useState } from "react";

function ViewProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/admin/viewproducts").then((response) => {
      setProducts(response.data);
    });
    console.log(products);
  }, []);

  const updateProductHandler = (id) => {
    console.log(id);
    const newProduct = prompt("enter the new name for the product");
    Axios.put("http://localhost:5000/admin/updateProduct", {
      newProduct: newProduct,
      id: id,
    });
  };
  const DeleteproductHandler = (id) => {
    Axios.delete(`http://localhost:5000/admin/deleteProduct/${id}`);
    console.log(id);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>viewProductsPage</h1>
      {products.map((product, key) => {
        return (
          <div className="container-sm" key={key}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.productId}</td>
                  <td>
                    {product.productName}
                    <button
                      className="btn-dark"
                      onClick={() => {
                        updateProductHandler(product._id);
                      }}
                    >
                      Edit{" "}
                    </button>
                    <button
                      className="btn-dark"
                      onClick={() => {
                        DeleteproductHandler(product._id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                  <td>{product.productCategory}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default ViewProducts;
