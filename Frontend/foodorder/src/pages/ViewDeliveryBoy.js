
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Styles/widgetLg.css";
import { DeleteOutline, LinearScale } from "@material-ui/icons";

import { Link } from "react-router-dom";


function ViewDeliveryBoy() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/admin/viewDeliveryBoy").then((response) => {
      setUsers(response.data);
    });
    console.log(users);
  }, []);
  return (
    // <div className="widgetLg" style={{ textAlign: "center" }}>
    //   <h1>ViewAllUsers</h1>
    //   {users.map((user, key) => {
    //     return (
    //       <div key={key}>
    //         <h2>{user.firstName}</h2>
    //       </div>
    //     );
    //   })}
    // </div>

    <div>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">All Registered in Delivery Boys</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Name</th>
            {/* <th className="widgetLgTh">Emal</th> */}
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
                {/* <td className="widgetLgAmount">{user.email}</td> */}
                <td className="widgetLgStatus">
                  <Link to="/users">
                    <button className="userListEdit">View</button>
                  </Link>
                  <DeleteOutline
                    className="productListDelete"
                    style={{ cursor: "pointer" }}
                    // onClick={() => {
                    //   DeleteUserHandler(user._id);
                    // }}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="widgetLg" style={{ textAlign: "center" }}>
        {/* <Link to="/admin/adduser"> */}
          <button className="userListEdit">Add user</button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default ViewDeliveryBoy;
