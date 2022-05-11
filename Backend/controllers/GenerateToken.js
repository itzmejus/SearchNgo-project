import UserLoginModel from "../models/UserLoginModel.js";
export const GenerateTokenController =async(req,res)=>{
    UserLoginModel.find({},(err,token)=>{
        if(err){
            res.send(err);
        }
        res.send(token);
    })
} 