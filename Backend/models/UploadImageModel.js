import mongoose from "mongoose";
const UploadImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const UploadImageModel = mongoose.model("images", UploadImageSchema);
export default UploadImageModel;


//upload image using muter