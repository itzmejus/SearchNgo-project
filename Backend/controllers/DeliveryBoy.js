import UserLoginModel from '../models/UserLoginModel.js'
export const viewDeliveryBoyController = async (req, res) => {
    UserLoginModel.find({ role: { $eq: "delivery" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}

