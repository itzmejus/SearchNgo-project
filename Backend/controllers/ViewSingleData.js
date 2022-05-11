
import UserLoginModel from "../models/UserLoginModel.js";

export const ViewSingleUserController = async (req, res) => {
    const id = req.params.id;
    UserLoginModel.findById(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data)
        }
    })
}
export const viewSingleCordinatorController = async (req, res) => {
    const id = req.params.id;
    UserLoginModel.findById(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data)
        }
    })
}
export const viewSingleAccountsController = async (req, res) => {
    const id = req.params.id;
    UserLoginModel.findById(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data)
        }
    })
}
export const viewSingleInvesterController = async (req, res) => {
    const id = req.params.id;
    UserLoginModel.findById(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data)
        }
    })
}
export const viewSingleAdminController = async (req, res) => {
    const id = req.params.id;
    UserLoginModel.findById(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data)
        }
    })
}
export const viewSinglePosController = async (req, res) => {
    const id = req.params.id;
    UserLoginModel.findById(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data)
        }
    })
}
