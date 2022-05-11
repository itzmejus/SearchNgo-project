import DeliveryboyModel from '../models/DeliveryBoyModel.js'


export const AddDeliveryBoyControlller = async (req, res) => {
    try {

        const { userName, email, password } = req.body

        const deliveryBoy = new DeliveryboyModel({
            userName: userName,
            email: email,
            password: password,
        })
        await deliveryBoy.save();
        res.send('data saved')
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }

}