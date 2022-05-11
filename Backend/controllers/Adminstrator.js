import UserLoginModel from '../models/UserLoginModel.js'
import MembershipPlanModel from '../models/MembershipModel.js'

export const viewAdminController = async (req, res) => {
    UserLoginModel.find({ role: { $eq: "admin" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}

export const rechargeWalletController = async (req, res) => {
    UserLoginModel.find({ role: { $in: ["admin"] } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}