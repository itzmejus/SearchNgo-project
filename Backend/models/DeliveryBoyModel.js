import mongoose from "mongoose";
const DeliveryboySchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})

const DeliveryboyModel= mongoose.model("deliveryBoy",DeliveryboySchema);
export default DeliveryboyModel;