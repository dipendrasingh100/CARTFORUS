const { Schema, model, default: mongoose } = require("mongoose")
const validator = require("validator")
const crypto = require("crypto")

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false
    },
    mobile: {
        type: Number,
        maxLength: [10, "Mobile Number should be of 10 digit only"],
        minLength: [10, "Mobile Number should be of 10 digit only"]
    },
    cart: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: { type: Number }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

userSchema.methods.getResetPasswordToken = function () {

    //generate Token
    const resetToken = crypto.randomBytes(20).toString("hex")

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex")

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000
    return resetToken
}

module.exports = model("User", userSchema)