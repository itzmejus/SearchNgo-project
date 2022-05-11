import "../Styles/widgetLg.css";
import Axios from "axios";
import { DeleteOutline, LinearScale } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/admin/allusers").then((response) => {
      setUsers(response.data);
    });
    console.log(users);
  }, []);
  const DeleteUserHandler = (id) => {
    Axios.delete(`http://localhost:5000/admin/deleteUser/${id}`);
    alert("user removed");
    console.log(id);
  };
  const ViewSingleUser = (id) => {
    console.log("id of clicked user is ", id);
  }

  return (
    <div>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">All Logged in Users</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Name</th>
            <th className="widgetLgTh">Joined Date</th>
            <th className="widgetLgTh">Emal</th>
            <th className="widgetLgTh">Status</th>
          </tr>

          {users.map((user, key) => {
            return (
              <tr className="widgetLgTr" key={key}>
                <td className="widgetLgUser">
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{user.firstName}</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">{user.email}</td>
                <td className="widgetLgStatus">
                  <Link to="/users" state={{ id: user._id }} >
                    <button className="userListEdit">View</button>
                  </Link>
                  <DeleteOutline
                    className="productListDelete"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      DeleteUserHandler(user._id);
                    }}
                  />

                  <button
                    className="userUpdateButton"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      ViewSingleUser(user._id);
                    }}
                  >View</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="widgetLg" style={{ textAlign: "center" }}>
        <Link to="/admin/adduser">
          <button className="userListEdit">Add user</button>
        </Link>
      </div>
    </div>
  );
}
