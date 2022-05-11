import MembershipPlanModel from '../models/MembershipModel.js'
import moment from 'moment';

export const MembershipPlanController = async (req, res) => {
    try {
        const { email, password, plan, billingId, hasTrial, balanceAmount, startDate, endDate } = req.body
        // if (!email || !plan || !billingId) {
        //     { throw new Error('Missing Data. Please provide values for email, billingID, plan') }
        // }
        const MembershipPlanData = new MembershipPlanModel({
            email: email,
            password: password,
            plan: plan || "none",
            billingId: billingId,
            hasTrial: hasTrial,
            balanceAmount: balanceAmount,
            startDate: startDate,
            endDate: endDate,
        })
        await MembershipPlanData.save()
        res.send("data saved")
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}


export const getMembership = async (req, res) => {
    MembershipPlanModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}

export const getMembersWithPro = async (req, res) => {
    MembershipPlanModel.find({ plan: { $eq: "pro" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}
export const getMembersWithBasic = async (req, res) => {
    MembershipPlanModel.find({ plan: { $eq: "basic" } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
    /*  MembershipPlanModel.find({ plan: { $in: ["basic"] } }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    }) */
}
// export const getMembersWithProAndPlanDetails = async (req, res) => {
//     MembershipPlanModel.find({ startDate: { $gte: new Date("2022-01-27T09:53:47.144+00:00") } },
//         (err, result) => {
//             if (err) {
//                 res.send(err)
//             }
//             res.send(result)
//         })
// }
export const getValidity = async (req, res) => {
    MembershipPlanModel.find({}, { "startDate": 1, "endDate": 1 }, (err, result) => {
        if (err) {
            res.send(err)
        }
        let data = result
        var month = []
        var day = []
        data.map((item) => {
            item.startDate
            let newData = moment(item.startDate).format("MM-DD-YYYY")
            let currentDate = moment(new Date()).format("MM-DD-YYYY")
            let Data = moment(item.endDate).format("MM-DD-YYYY")
            // console.log(`start date is, ${newData}, end date is,${Data}`);
            // let dateDifference= moment(item.startDate).diff(moment(item.endDate))
            let dateDifferenceInMonth = moment(Data).diff(moment(currentDate), 'month')
            let dateDifferenceInDays = moment(Data).startOf('day').diff(moment(currentDate).startOf('day'), 'days')
            month.push(dateDifferenceInMonth)
            day.push(dateDifferenceInDays)
            // let newDate=moment(dateDifference).format("MM-DD-YYYY")
            // console.log('date difference in days is',dateDifferenceInDays);
        })
        console.log('date difference in month is', month, 'and', day, 'days');
        res.send(`total subscription left is ${month} months and ${day} days`);

    })
}
export const getValidityById = async (req, res) => {
    const id = req.params.id
    MembershipPlanModel.findById(id, { "startDate": 1, "endDate": 1 }, (err, result) => {
        if (err) {
            res.send(err)
        }
        let data = result
        var month = []
        var day = []
        data.startDate
        // let newData = moment(data.startDate).format("MM-DD-YYYY")
        let currentDate = moment(new Date()).format("MM-DD-YYYY")
        let Data = moment(data.endDate).format("MM-DD-YYYY")
        // let dateDifferenceInMonth = moment(currentDate).diff(moment(Data), 'month')
        let dateDifferenceInMonth = moment(Data).diff(moment(currentDate), 'month')
        let dateDifferenceInDays = moment(Data).startOf('day').diff(moment(currentDate).startOf('day'), 'days')
        console.log('month difference is', dateDifferenceInMonth);
        console.log('day difference is', dateDifferenceInDays);
        month.push(dateDifferenceInMonth)
        day.push(dateDifferenceInDays)
        // console.log('date difference in month is', month, 'and', day, 'days');
        res.send(`total subscription left is ${month} months and ${day} days`);
    })
}

export const getValidityByIdAndLeftDays = async (req, res) => {
    const id = req.params.id
    MembershipPlanModel.findById(id, { "endDate": 1 }, (err, result) => {
        if (err) {
            res.send(err)
        }
        let day = []
        let membershipEndDate = moment(result.endDate).format("MM-DD-YYYY")
        let currentDate = moment(new Date()).format("MM-DD-YYYY")
        let dateDifferenceInDays = moment(membershipEndDate).startOf('day').diff(moment(currentDate).startOf('day'), 'days')
        day.push(dateDifferenceInDays)
        res.send(`days left is ${day} `)
        console.log(dateDifferenceInDays);
    })
}


// export const UpdateValidity = async (req, res) => {
//     const newDate = req.body.newDate;
//     const id = req.body.id;
//     try {
//         await MembershipPlanModel.findById(id, (error, userValidityToUpdate) => {
//             userValidityToUpdate.endDate = newDate;
//             userValidityToUpdate.save();
//         })
//     } catch (error) {
//         // res.status(500).json({ message: "something went wrong" })
//         // res.send("error")
//         console.log(error);
//     }

//     res.send("updated")
// } 

export const UpdateValidity = async (req, res) => {
    const id = req.params.id
    console.log(id);
    const newDate = req.body.newDate
    console.log(req.body);
    MembershipPlanModel.findOne(id, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}

export const UpdatePlan = async (req, res) => {
    const updatedPlan = req.body.updatedPlan
    const id = req.params.id;
    MembershipPlanModel.findById({ id }, { $set: { "endDate": updatedPlan } }, (err, result) => {
        if (err) {
            res.send(err)
        }
    })
}


export const viewDifferent = async (req, res) => {
    const id = req.params.id;
    const user = MembershipPlanModel.find({ "_id": id })

    user.exec((err, userData) => {
        if (err) {
            res.send(err)
        }
        // res.send(userData)
        let data = userData
        // console.log(data);
        res.send(data)
    })
}

export const transferMoney = async (req, res) => {
    let id = req.params.id;
    let dataBody = req.body
    let amountToTransfer = req.body.amountToTransfer
    let reciverId = req.body.reciverId
    let senderId
    senderId = id
    global.senderBalance = 0
    // var senderBalance = 0
    let reciverBalance = 0
    console.log(`sender ID is ${senderId}`);
    console.log(`Amount to Transfer is ${dataBody.amountToTransfer}`);
    // console.log(` Reciever ID is ${dataBody.reciverId}`);
    const senderData = MembershipPlanModel.findById({ "_id": senderId })
    senderData.exec((err, senderDataList) => {
        if (err) {
            res.send(err)
        }
        res.send(senderDataList)
    })
    MembershipPlanModel.findById(senderId, { "balanceAmount": 1 }, (error, result) => {
        if (error) {
            console.log(error);
        }
        senderBalance = result.balanceAmount
        if (result.balanceAmount < amountToTransfer) {
            console.log("low balance 1");
            return
        }
        else if (amountToTransfer < 100) {
            console.log("low balance 2");
            return
        }

        else {

            let availableBalance = result.balanceAmount - amountToTransfer
            console.log(availableBalance);
            MembershipPlanModel.findByIdAndUpdate(senderId, { $set: { "balanceAmount": availableBalance } }, (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
            console.log(` balance amount of Sender is ${senderBalance}`);

            MembershipPlanModel.findById(reciverId, { "balanceAmount": 1 }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                reciverBalance = result.balanceAmount
                // reciverBalance++;
                console.log(`balance amount of Reciever is ${reciverBalance}`);
                let amountRecieved = amountToTransfer
                let totalBalanceOfReciever = reciverBalance + amountRecieved
                MembershipPlanModel.findByIdAndUpdate(reciverId, { $set: { "balanceAmount": totalBalanceOfReciever } }, (error, updatedBalance) => {
                    if (error) {
                        res.send(error)
                    }
                    console.log(`balance of reciver ${totalBalanceOfReciever}`);
                })
            })
        }  


    })
    // MembershipPlanModel.findById(reciverId, { "balanceAmount": 1 }, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     reciverBalance = result.balanceAmount
    //     // reciverBalance++;
    //     console.log(`balance amount of Reciever is ${reciverBalance}`);
    //     let amountRecieved=amountToTransfer
    //     let totalBalanceOfReciever= reciverBalance+amountRecieved
    //     MembershipPlanModel.findByIdAndUpdate(reciverId,{$set:{"balanceAmount":totalBalanceOfReciever}},(error,updatedBalance)=>{
    //         if (error) {
    //             res.send(error)
    //         }
    //         console.log(`balance of reciver ${totalBalanceOfReciever}`);
    //     })
    // })

}


export const checkBalance = async (req, res) => {
    MembershipPlanModel.find({}, { balanceAmount: 0 }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
}  