import "../Styles/sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link" style={{ textDecoration: "none" }}>
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to='/admin' className="link" style={{ textDecoration: "none" }}>
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Administrator
                </li>
              </Link>
              <Link to='/cordinator' className="link" style={{ textDecoration: "none" }}>
                <li className="sidebarListItem">
                  <DynamicFeed className="sidebarIcon" />
                  Co-ordinator
                </li>
              </Link>
              <Link to='/investors' className="link" style={{ textDecoration: "none" }}>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Investors
                </li>
              </Link>
              <Link to='/accounts' className="link" style={{ textDecoration: "none" }}>
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Accounts
                </li>
              </Link>
              <Link
                to="/userList"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to='/admin/deliveryboy' className="link" style={{ textDecoration: "none" }}>
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Deliveryboy
                </li>
              </Link>
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <Link
                to="/productList"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <Link
                to="/admin/allcategory"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Categories
                </li>
              </Link>
              <Link to='/admin/deliveryboy' className="link" style={{ textDecoration: "none" }}>
                <li className="sidebarListItem">
                  <DynamicFeed className="sidebarIcon" />
                  Shop
                </li>
              </Link>
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
