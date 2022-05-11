import Axios from "axios";
import React, { useEffect, useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [token,setToken]=useState([]);
  const resetPasswordHandler = () => {
    Axios.post("http://localhost:5000/resetpassword", {
      email: email,
    })
      .then(() => {
        alert("loged in success");
      })
      .catch("failed");
  };

  useEffect(()=>{
    Axios.get("http://localhost:5000/resetpassword").then((response)=>{
      setToken(response.data)
    })
    console.log(token);
  },[])

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ForgotPassword</h1>
      <label>Please enter your email or username</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button className=" btn-dark" onClick={resetPasswordHandler}>Get Password Reset Link</button>
      
    </div>
  );
}

export default ForgotPassword;
