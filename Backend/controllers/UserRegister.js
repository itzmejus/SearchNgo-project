import UserLoginModel from "../models/UserLoginModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const RegisterController = async (req, res) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const role= req.body.role

  try {
    const existingUser = await UserLoginModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "user already exist" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "password does not match" });
    const hashedPassoword = await bcrypt.hash(password, 12);

    const result = await UserLoginModel.create({
      firstName: firstName,
      email: email,
      password: hashedPassoword,
      role:role,
    });

    // const result= await UserLoginModel.create({email,password:hashedPassoword,name:firstName})
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
