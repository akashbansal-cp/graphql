import mongoose from 'mongoose'

export const userdata = mongoose.model("userdata",{
    tgid: String,
    user: Object,
    freeCreditUsed: Boolean,
    freeCreditDate: Boolean,
    boughtCredit: Number
})