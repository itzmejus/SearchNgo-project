import "../Styles/widgetLg.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline, LinearScale } from "@material-ui/icons";



function Accounts() {
  const [accounts, setAccounts] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:5000/admin/viewAccounts").then((response) => {
      setAccounts(response.data);
    });
    console.log(accounts);
  }, []);
  const DeleteUserHandler = (id) => {
    Axios.delete(`http://localhost:5000/admin/deleteAccounts/${id}`);
    alert("user removed");
    console.log(id);
  };
  return (
    <div>
      <div>
        <div className="widgetLg">
          <h3 className="widgetLgTitle">All Account Managers</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Name</th>
              {/* <th className="widgetLgTh">Joined Date</th> */}
              {/* <th className="widgetLgTh">Emal</th> */}
              {/* <th className="widgetLgTh">Status</th> */}
            </tr>

            {accounts.map((user, key) => {
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
                  {/* <td className="widgetLgDate">2 Jun 2021</td> */}
                  {/* <td className="widgetLgAmount">{user.email}</td> */}
                  <td className="widgetLgStatus">
                    <Link to="/users">
                      <button className="userListEdit">View</button>
                    </Link>
                    <DeleteOutline
                      className="productListDelete"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        DeleteUserHandler(user._id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="widgetLg" style={{ textAlign: "center" }}>
          <Link to="/admin/adduser">
            <button className="userListEdit">Add Account Manager</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Accounts