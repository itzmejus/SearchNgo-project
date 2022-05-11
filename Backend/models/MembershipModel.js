import mongoose from "mongoose";
import moment from 'moment';

const MembershipPlanSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        enum: ['none', 'basic', 'pro'],
        default: 'none',
    },
    billingId: {
        type: String,
        required: true,

    },
    hasTrial: {
        type: Boolean,
        default: false,
        required: true,

    },
    balanceAmount: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
        default: moment().format("ll"),
    },
    endDate: {
        type: Date,
        required: true,
        default: null,
    },


})
const MembershipPlanModel = mongoose.model("membership", MembershipPlanSchema);
export default MembershipPlanModel;