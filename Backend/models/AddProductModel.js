import mongoose from "mongoose";
const AddProductSchema=new mongoose.Schema({
    productId:{
        type: Number,
        required:true,
    },
    productCategory:{
        type:String,
        required: true,
    },
    productName:{
        type:String,
        required:true,
        minlength: 6,
    },
    productDescription:{
        type:String,
        required:true,
    },
});

const AddProductModel= mongoose.model("products",AddProductSchema);
export default AddProductModel;
