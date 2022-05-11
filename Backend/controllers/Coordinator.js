import UserLoginModel from '../models/UserLoginModel.js'

export const viewCordinatorController = async (req, res) => {
    UserLoginModel.find({ role: { $eq: "cordinator" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}