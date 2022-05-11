import UserLoginModel from "../models/UserLoginModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import nodemailer from 'nodemailer';
export const LoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserLoginModel.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "user does not exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

//forgot password
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'justintechzera@gmail.com',
//       pass: '**********'
//     }
//   });
//   let mailOptions = {
//     from: 'justintechzera@gmail.com',
//     to: 'itzjustin3344gmail.com',
//     subject: 'Safety',
//     text: `hello justin`
//   };

//  const sendMailto =()=> transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

//   sendMailto();

//password reset
const JWT_SECRET = "helloworld";
export const PasswordReset = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await UserLoginModel.findOne({ email });
    if (existingUser) {
      const token = jwt.sign({ email: UserLoginModel.email }, "test", {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
      return;
    } else {
      res.send("email is not present");
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
