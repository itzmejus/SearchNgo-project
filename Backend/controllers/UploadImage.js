import UploadImageModel from "../models/UploadImageModel.js";
import multer from "multer";

const Storage = multer.diskStorage({
  destination: "/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");

export const UploadImageController = async (req, res) => {
  upload(req, res, (err) => {
    console.log("Request file ---", req.file);
    console.log("data from client" + req.body);

    if (err) {
      console.log(err);
    } else {
      const newImage = new UploadImageModel({
        name: req.body.filename,
        image: {
          data: req.file,
          contentType: "image/jpg",
        },
      });
      newImage
        .save()
        .then(() => res.send("successfully uploaded"))
        .catch((err) => console.log(err));
    }
  });
};
