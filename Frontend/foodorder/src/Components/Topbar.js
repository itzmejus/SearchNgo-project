import React from "react";
import "../Styles/topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Link to="/" className="link" style={{ textDecoration: "none" }}>

          <span className="logo">FoodOrder Super Admin</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://pbs.twimg.com/profile_images/1479443900368519169/PgOyX1vt_400x400.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
