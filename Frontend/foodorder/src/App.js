import Navbar from "./Components/Navbar";
import AddProduct from "./Components/AddProduct";
import ViewProducts from "./Components/ViewProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AllCategories from "./Components/AllCategories";
import AllProducts from "./Components/AllProducts";
import UserRegister from "./Components/UserRegister";
import UserLogin from "./Components/UserLogin";
import ViewAllUsers from "./Components/ViewAllUsers";
import ForgotPassword from "./Components/ForgotPassword";
import UploadImage from "./Components/UploadImage";
import Payment from "./Components/Payment";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import User from "./Components/Users";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import UserList from "./pages/UserList";
import ProductList from "./pages/ProductList";
import AddUser from "./pages/AddUser";
import HomepageFeatures from './pages/HomepageFeatures.js'
import './Styles/App.css'
import CategoryEdit from "./Components/CategoryEdit";
import AddDeliveryBoy from "./Components/AddDeliveryBoy";
import DeliveryBoy from "./pages/DeliveryBoy";
import ViewDeliveryBoy from "./pages/ViewDeliveryBoy";
import Admin from "./pages/Admin";
import Cordinator from "./pages/Cordinator";
import Investors from "./pages/Investor";
import Accounts from "./pages/Accounts";
import CordinatorPermission from "./Components/CordinatorPermission";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container" >
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomepageFeatures />} />
          <Route path="/cordinatorPermission"  element={<CordinatorPermission/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cordinator" element={<Cordinator />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/admin/add" element={<AddProduct />} />
          <Route path="/view" element={<ViewProducts />} />
          <Route path="/admin/allcategory" element={<AllCategories />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/allusers" element={<ViewAllUsers />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/admin/uploadimage" element={<UploadImage />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/log" element={<Login />} /> */}
          <Route path="/users" element={<User />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/admin/adduser" element={<AddUser />} />
          <Route path="/admin/category/update" element={<CategoryEdit />} />
          <Route path="/admin/deliveryboy" element={<DeliveryBoy />} />
          <Route path="/admin/view/deliveryboy" element={<ViewDeliveryBoy />} />
          <Route path="/admin/add/deliveryboy" element={<AddDeliveryBoy />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
