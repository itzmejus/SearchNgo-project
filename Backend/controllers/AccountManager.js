import UserLoginModel from '../models/UserLoginModel.js'


export const viewAccountsController = async (req, res) => {
    UserLoginModel.find({ role: { $eq: "accounts" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}