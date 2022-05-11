import UserLoginModel from '../models/UserLoginModel.js'

export const viewInvestorsController = async (req, res) => {
    UserLoginModel.find({ role: { $eq: "investor" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}


