import UserLoginModel from '../models/UserLoginModel.js'

export const AllUserController = async (req, res) => {
    UserLoginModel.find({}, (err, userLoginData) => {
        if (err) {
            res.send(err);
        }
        res.send(userLoginData)
    })
}


