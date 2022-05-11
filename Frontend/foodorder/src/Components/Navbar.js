import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid" > 
          <a class="navbar-brand" href="">
            Food
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/admin/add" style={{ textDecoration: "none" }}>
                  <a class="nav-link" href="">
                    Add Product
                  </a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Details
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to="/admin/allcategory"
                      style={{ textDecoration: "none" }}
                    >
                      <a class="dropdown-item" href="#">
                        All Category
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/allusers"
                      style={{ textDecoration: "none" }}
                    >
                      <a class="dropdown-item" href="#">
                        All Users
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/view" style={{ textDecoration: "none" }}>
                      <a class="dropdown-item" href="#">
                        All Products
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment" style={{ textDecoration: "none" }}>
                      <a class="dropdown-item" href="#">
                        Payment
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/uploadimage"
                      style={{ textDecoration: "none" }}
                    >
                      <a class="dropdown-item" href="#">
                        Upload image
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="">
                    Regiser
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <a class="nav-link active" aria-current="page" href="">
                    Login
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
