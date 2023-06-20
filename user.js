import mongoose from "mongoose";

export const user_data = mongoose.model("userdata",{
    tgid: String,
    user: {
        id: String,
        is_bot: Boolean,
        first_name: String,
        username: String,
        language_code: String
    },
    freeCreditUsed: Boolean,
    freeCreditDate: String,
    boughtCredit: Number
})