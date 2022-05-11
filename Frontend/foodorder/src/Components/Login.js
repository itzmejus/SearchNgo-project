import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

function Login() {
  return (
    <div>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Company name
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <input
          class="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a class="nav-link active" aria-current="page">
                      <span data-feather="home"></span>
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/admin/add" style={{ textDecoration: "none" }}>
                    <a class="nav-link" href="#">
                      <span data-feather="file"></span>
                      Add Product
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/admin/allcategory"
                    style={{ textDecoration: "none" }}
                  >
                    <a class="nav-link" href="#">
                      <span data-feather="shopping-cart"></span>
                      All Category
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/admin/allusers" style={{ textDecoration: "none" }}>
                    <a class="nav-link" href="#">
                      <span data-feather="users"></span>
                      Customers
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/view" style={{ textDecoration: "none" }}>
                    <a class="nav-link" href="#">
                      <span data-feather="bar-chart-2"></span>
                      All Products
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/payment" style={{ textDecoration: "none" }}>
                    <a class="nav-link" href="#">
                      <span data-feather="layers"></span>
                      Total Income
                    </a>
                  </Link>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a
                  class="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>
            {/* <div>
                <HomePage/>
            </div> */}
            <h2>Section title</h2>

            <canvas
              class="my-4 w-100"
              id="myChart"
              width="900"
              height="380"
            ></canvas>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
