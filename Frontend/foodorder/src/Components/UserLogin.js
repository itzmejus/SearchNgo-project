import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    Axios.post("http://localhost:5000/userlogin", {
      email: email,
      password: password,
    })
      .then(() => {
        alert("loged in success");
      })
      .catch("failed");
  };
  return (
    <div className="container-sm"  style={{ textAlign: "center" }}>
      <h1>LoginPage</h1>
      <label>username</label>
      <input
        type="email"
        placeholder="enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>password</label>
      <input
        type="password"
        placeholder="enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Link
        style={{ textDecoration: "none" }}
        to="/login"
        onClick={loginHandler}
      >
        <button className="btn-dark">Login </button>
      </Link>
      <h1>ForgotPassword? </h1>
      <button className="btn-dark">
        <Link style={{ textDecoration: "none" }} to="/forgotpassword"></Link>
        Reset password
      </button>
    </div>
  );
}

export default UserLogin;
