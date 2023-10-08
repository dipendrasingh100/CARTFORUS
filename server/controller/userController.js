const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")
const generateToken = require("../utils/generateToken")
const User = require("../models/userModel")
const ErrorHandler = require("../utils/errorHandler")
const sendToken = require("../utils/sendToken")

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password"), 400)
    }

    const user = await User.findOne({ email }).select("+password")  //to include the password in returned document becz default is false
    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 404))
    }

    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }

    const token = generateToken(user._id)
    sendToken(token, 200, res)
})


const signup = asyncHandler(async (req, res, next) => {
    const { name, mobile, email, password } = req.body

    //check if email already registered
    const userExists = await User.findOne({ email })  //if not found return null, else the document
    if (userExists) {
        return next(new ErrorHandler("Email already registered", 409))
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newuser = await User.create({ name, mobile, email, password: hashPassword })

    const token = generateToken({ userid: newuser._id })

    sendToken(token, 201, res)
}
)


const logout = (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}
module.exports = { login, signup, logout }