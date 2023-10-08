const { Schema, model } = require("mongoose")
const validator = require("validator")

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
    createdAt: {
        type: Date,
        default: Date.now,
    },

})

module.exports = model("User", userSchema)