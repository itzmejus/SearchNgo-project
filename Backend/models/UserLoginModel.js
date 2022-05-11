import mongoose from "mongoose";
const UserLoginSchemma = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  role:{
    type:String,
    required:true,
  },
});
const UserLoginModel= mongoose.model("userLoginData",UserLoginSchemma);
export default UserLoginModel;

