import UserLoginModel from "../models/UserLoginModel.js";

const allowToFetchPage = (permissons) => {
    return (req, res, next) => {
        const userRole = req.body.role
        if (permissons.includes(userRole)) {
            next()
        }
        else {
            res.status(200).json("u dont have permisson to see this")
        }
    };
};


// export const allowToViewPage = (permissons) => {
//     return
// }
export default allowToFetchPage;

/*  UserLoginModel.find({}),(err,role)=>{
         if(err){
             res.send(err)
         }
         res.send(role)
     }
     console.log(role); */
    // {
    //     name: "justin";
    //     role: "admin";
    // }