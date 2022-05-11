import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Styles/AllCategories.css";
import { DeleteOutline, LinearScale } from "@material-ui/icons";
import { Link } from "react-router-dom";

function AllCategories() {
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:5000/admin/viewproducts").then((response) => {
      setCategory(response.data);
    });
    console.log(category);
  }, []);
  const GetCategoryId = (id) => {
    console.log(id);
  }
  return (
    <div className="container">
      <div className="catContainer" >
        <h1>AllCategories</h1>
        <input
          class="form-control me-2"
          type="text"
          placeholder=" search for the items"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {category
          .filter((val) => {
            if (searchTerm == " ") {
              return val;
            } else if (
              val.productCategory
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div key={key}>
                <ul className="catList">
                  <li className="catListItem">
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/yot9zfocxiqxeghusxny"
                      alt=""
                      className="catImg"
                    />
                    <div className="catName">
                      <h2>{val.productCategory}</h2>
                    </div>
                    <DeleteOutline />
                    <Link to='/admin/category/update'>
                      <button className="userListEdit" onClick={GetCategoryId(val._id)}>
                        Edit
                      </button>
                    </Link>

                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllCategories;
