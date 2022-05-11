import UserLoginModel from "../models/UserLoginModel.js";

export const DeleteAdminController = async (req, res) => {
  const id = req.params.id;
  await UserLoginModel.findByIdAndRemove(id).exec();
  res.send("user removed");
};
