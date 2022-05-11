import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { LoginController, PasswordReset } from "./controllers/UserLogin.js";
import { RegisterController } from "./controllers/UserRegister.js";
import { AddProductController } from "./controllers/AddProduct.js";
import { ViewCategory, Deleteproduct, UpdateProduct, ViewProductsController, ViewSingleProduct, } from "./controllers/ViewProduct.js";
import { AllUserController } from "./controllers/AllUsers.js";
import { UploadImageController } from "./controllers/UploadImage.js";
import { GenerateTokenController } from "./controllers/GenerateToken.js";
import { EditCategoryController } from "./controllers/UpdateCategory.js";
import allowToFetchPage from "./middlewares/AuthController.js";
import { MakePaymentController } from "./controllers/MakePayment.js";
import { DeleteUserController } from "./controllers/DeleteUser.js";
import { AddDeliveryBoyControlller } from "./controllers/AddDeliveryBoy.js";
import { rechargeWalletController, viewAdminController } from "./controllers/Adminstrator.js";
import { viewCordinatorController } from "./controllers/Coordinator.js";
import { viewDeliveryBoyController } from "./controllers/DeliveryBoy.js";
import { viewInvestorsController } from "./controllers/Investors.js";
import { viewAccountsController } from "./controllers/AccountManager.js";
import { DeleteAccountsController } from "./controllers/DeleteAccounts.js";
import { DeleteAdminController } from "./controllers/DeleteAdmin.js";
import { DeleteCordinatorController } from "./controllers/DeleteCordinator.js";
import { DeleteInvestorController } from "./controllers/DeleteInvestor.js";
import AuthenticationManage from "./middlewares/Authentication.js";
import { AddUserLoginVerifieController, ViewAccountsController, ViewCordinatorController, ViewInvesterController, ViewMainAminController, ViewMainPosController, ViewUserController } from "./controllers/LoginAuth.js";
import { viewSingleAccountsController, viewSingleAdminController, viewSingleCordinatorController, viewSingleInvesterController, viewSinglePosController, ViewSingleUserController } from "./controllers/ViewSingleData.js";
import { checkBalance, getMembership, getMembersWithBasic, getMembersWithPro, /* getMembersWithProAndPlanDetails */ getValidity, getValidityById, getValidityByIdAndLeftDays, MembershipPlanController, transferMoney, UpdatePlan, UpdateValidity, viewDifferent } from "./controllers/MemershipPlan.js";

//initilaize app
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

//database connection url
const dburl =
  // "mongodb+srv://techzera:techzera@cluster0.jamim.mongodb.net/FoodApp?retryWrites=true&w=majority";
  "mongodb+srv://justin:justinbro@cluster0.9f9un.mongodb.net/FoodApp?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
};

//mongo db connection

mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("error:", e);
  });

//Routes


//admin Routes

//post
app.post("/userreg", RegisterController); //reqistartion
app.post("/userlogin", LoginController); //login
app.post("/resetpassword", PasswordReset);
app.post("/admin/addproduct", AddProductController); //add product to db
app.post("/admin/add/deliveryboy", AddDeliveryBoyControlller)
app.post("/admin/uploadimage", UploadImageController);
app.post("/admin/update/category", EditCategoryController);//update data from database
app.post("/payment", MakePaymentController)

//get
app.get("/resetpassword", GenerateTokenController);
app.get("/admin/viewproducts" /* , allowToFetchPage(["user","admin"]) */, ViewProductsController); //view all products in the database
app.get("/admin/viewSingleItem/:id", ViewSingleProduct)
app.get("/admin/viewCategory", ViewCategory) /*  AuthenticationManage*/
app.get("/admin/viewAdmin", viewAdminController); //view all admin
app.get("/admin/viewCordinator", viewCordinatorController); //view all cordinator
app.get("/admin/viewDeliveryBoy", viewDeliveryBoyController); //view all delivery boys
app.get("/admin/viewInvestor", viewInvestorsController); //view all investor
app.get("/admin/viewAccounts", viewAccountsController); //view all accounts
app.get("/admin/allusers", AllUserController); //view all users
app.get("/payment", MakePaymentController)

//admin Update
app.put("/admin/updateProduct", UpdateProduct);
app.post("/admin/updateValidity/:id", UpdateValidity)
app.get("/admin/updatePlan", UpdatePlan)

//deleting
app.delete("/admin/deleteProduct/:id", Deleteproduct);
app.delete("/admin/deleteUser/:id", DeleteUserController)
app.delete("/admin/deleteUser/:id", DeleteAdminController)
app.delete("/admin/deleteAccounts/:id", DeleteAccountsController)
app.delete("/admin/deleteCordinator/:id", DeleteCordinatorController)
app.delete("/admin/deleteInvestor/:id", DeleteInvestorController)

//user validate section
app.post("/verify/login", AddUserLoginVerifieController)


// app.get('/admin/viewTotal',viewAllLoggedController)
app.get('/admin/viewTotalUsers', ViewUserController)
app.get('/admin/viewSingleUsers/:id', ViewSingleUserController)
app.get('/admin/viewTotalCordinator', ViewCordinatorController)
app.get('/admin/viewSingleCordinator/:id', viewSingleCordinatorController)
app.get('/admin/viewTotalAccounts', ViewAccountsController)
app.get('/admin/viewSingleAccounts/:id', viewSingleAccountsController)
app.get('/admin/viewTotalInvester', ViewInvesterController)
app.get('/admin/viewSingleInvester/:id', viewSingleInvesterController)
app.get('/admin/viewTotalMainAdmin', ViewMainAminController)
app.get('/admin/viewTotalMainAdmin/:id', viewSingleAdminController)
app.get('/admin/viewTotalPos', ViewMainPosController)
app.get('/admin/viewSinglePos/:id', viewSinglePosController)
app.get('/admin/viewDifferent/:id', viewDifferent)

//Membership plan
app.post("/admin/membership/add", MembershipPlanController)
app.get("/admin/membership", getMembership)   //display all  
app.get("/admin/membersWithPro", getMembersWithPro)   //dsiplay pro members
app.get("/admin/membersWithBasic", getMembersWithBasic)    //dsiplay basic members
app.get("/admin/getValidity", getValidity) //dispay all users validity
app.get("/admin/getValidityById/:id", getValidityById)  //dispay  users validity month and days based on ID 
app.get("/admin/getValidityByIdAndDaysLeft/:id", getValidityByIdAndLeftDays) //dispay  users validity days based on ID 
// app.get("/admin/membersWithPlan",getMembersWithProAndPlanDetails)   

//wallet section
app.post("/admin/wallet/transfer/:id",transferMoney)
app.get("/admin/wallet/money",checkBalance)


//super admin 
app.get("/superadmin/wallet/recharge",rechargeWalletController)

//server 
app.get("/", (req, res) => res.status(200).send("server is here"));

//server Listen
app.listen(port, () => console.log(`server is running at ${port}`));  