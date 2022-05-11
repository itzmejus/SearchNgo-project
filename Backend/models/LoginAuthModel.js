import mongoose from "mongoose";
const LoginAuthSchema= new mongoose.Schema({
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role:{
          type:String,
          default:'user',
          enum:['user','admin','cordinator','pos','investor','accounts','mainadmin']
      },
});
const LoginAuthModel=mongoose.model('LoginAuthData',LoginAuthSchema);
export default LoginAuthModel