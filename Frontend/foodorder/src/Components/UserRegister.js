import React, { useState } from "react";
import Axios from "axios";

function UserRegister() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const saveUser = () => {
    Axios.post("http://localhost:5000/userreg", {
      email: email,
      firstName: firstName,
      password: password,
      confirmPassword: confirmPassword,
      role: role,
    })
      .then(() => {
        alert("success");
      })
      .catch("failed");
    console.log(firstName, email, password);
  };

  return (
    <div className="login" style={{ textAlign: "center" }}>
      <h1>Registartion Page</h1>
      <div className="phone">
        <label>name</label>
        <input
          type="string"
          placeholder="please enter name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="phone">
        <label>Enter email</label>
        <input
          type="email"
          placeholder="please enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="phone">
        <label>Enter password</label>
        <input
          type="password"
          placeholder="please enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="phone">
        <label>confrim password</label>
        <input
          type="password"
          placeholder="please enter password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="phone">
        <label>Menton the role</label>
        <input
          type="text"
          placeholder="please enter the role Admin/user"
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <button onClick={saveUser}>Sign up</button>
    </div>
  );
}

export default UserRegister;
