import React, { useEffect, useState } from "react";
import Axios from "axios";

function ViewAllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/admin/allusers").then((response) => {
      setUsers(response.data);
    });
    console.log(users);
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ViewAllUsers</h1>
      {users.map((user, key) => {
        return (
          <div key={key}>
            <h2>{user.firstName}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ViewAllUsers;
