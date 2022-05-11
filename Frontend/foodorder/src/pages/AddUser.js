import "../Styles/newUser.css";
import React, { useState } from "react";
import Axios from "axios";

function AddUser() {
  //   const [userName, setUserName] = useState("");
  //   const [fullName, setFullName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confrimPassword, setConfirmPassword] = useState("");
  //   const [gender, setGender] = useState("");
  //     const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const SaveUserHandler = () => {
    Axios.post("http://localhost:5000/userreg", {
      //   userName: userName,
      //   fullName: fullName,
      //   email: email,
      //   phone: phone,
      //   address: address,
      //   password: password,
      //   confrimPassword: confrimPassword,
      //   gender: gender,
      firstName: firstName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      role: role,
    })
      .then(() => {
        alert("success");
      })
      .catch("failed");
    console.log(email, password);
  };

  return (
    <div className="container">
      <div className="newUser">
        <h1 className="newUserTitle">New Shop</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input
              type="text"
              placeholder="john"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          {/* <div className="newUserItem">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Smith"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div> */}
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="newUserItem">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="newUserItem">
            <label>Role </label>
            <input
              type="password"
              placeholder="Role"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </div>
          {/* <div className="newUserItem">
            <label>Phone</label>
            <input
              type="text"
              placeholder="+1 123 456 78"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div> */}
          {/* <div className="newUserItem">
            <label>Address</label>
            <input
              type="text"
              placeholder="New York | USA"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div> */}
          {/* <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label for="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label for="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label for="other">Other</label>
            </div>
          </div> */}

          {/* <div className="newUserItem">
            <label>Role</label>
            <select
              className="newUserSelect"
              onSelect={(e) => {
                setRole(e.target.value);
              }}
            >
              <option>Customer</option>
              <option>Admin</option>
            </select>
          </div> */}
          <button className="newUserButton" onClick={SaveUserHandler}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;


