import LoginAuthModel from "../models/LoginAuthModel.js";
export const AddUserLoginVerifieController = async (req, res) => {
    try {
        const { email, password, role } = req.body
        const LoginVerifier = new LoginAuthModel({
            email: email,
            password: password,
            role: role || "user"
        })
        await LoginVerifier.save();
        res.send('data saved')
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });

    }
}


// export const viewAllLoggedController = async (req, res) => {
//     LoginAuthModel.find({}, (err, data) => {
//         if (err) {
//             res.send(err)
//         }
//         res.send(data)
//     })
// }

export const ViewUserController = async (req, res) => {
    LoginAuthModel.find({ role: { $eq: "user" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}
export const ViewCordinatorController = async (req, res) => {
    LoginAuthModel.find({ role: { $eq: "cordinator" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}
export const ViewAccountsController = async (req, res) => {
    LoginAuthModel.find({ role: { $eq: "accounts" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}
export const ViewInvesterController = async (req, res) => {
    LoginAuthModel.find({ role: { $eq: "investor" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}
export const ViewMainAminController = async (req, res) => {
    LoginAuthModel.find({ role: { $eq: "mainadmin" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}
export const ViewMainPosController = async (req, res) => {
    LoginAuthModel.find({ role: { $eq: "pos" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}
