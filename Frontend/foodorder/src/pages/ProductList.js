import "../Styles/widgetSm.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { DeleteOutline, LinearScale } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Visibility } from "@material-ui/icons";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/admin/viewproducts").then((response) => {
      setProducts(response.data);
    });
    console.log(products);
  }, []);

  const DeleteproductHandler = (id) => {
    Axios.delete(`http://localhost:5000/admin/deleteProduct/${id}`);
    console.log(id);
    alert("deleted");
  };

  const updateProductHandler = (id) => {
    console.log(id);
    const newProduct = prompt("enter the new name for the product");
    Axios.put("http://localhost:5000/admin/updateProduct", {
      newProduct: newProduct,
      id: id,
    });
  };

  const IndividualProductHandler = (id) => {
    console.log(id);
  };

  const SingleProductHandler = (id) => {
    console.log(id);
  };
  return (
    <div className="container">
      <div className="widgetSm">
        <div className="widgetAdd">
          <span className="widgetSmTitle">Available Products</span>
          <br />
          <Link to="/newproduct">
            <button className="userListEdit">
              <span className="widgetSmTitle">Add Products</span>
            </button>
          </Link>
        </div>

        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        {products
          .filter((val) => {
            if (searchTerm == " ") {
              return val;
            } else if (
              val.productCategory
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <ul className="widgetSmList">
                <li className="widgetSmListItem">
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/yot9zfocxiqxeghusxny"
                    alt=""
                    className="widgetSmImg"
                  />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername"> {val.productName}</span>
                    <span className="widgetSmUserTitle">
                      {val.productCategory}
                    </span>
                  </div>
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <button
                      className="widgetSmButton"
                      onClick={() => {
                        SingleProductHandler(val._id);
                      }}
                    >
                      <Visibility className="widgetSmIcon" />
                      Display
                    </button>
                  </Link>
                  <button
                    className="userListEdit"
                    onClick={() => {
                      updateProductHandler(val._id);
                    }}
                  >
                    Edit
                  </button>
                  <DeleteOutline
                    className="productListDelete"
                    onClick={() => {
                      DeleteproductHandler(val._id);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
