const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const ErrorHandler = require("../utils/errorHandler")
const User = require("../models/userModel")

const isAuthenticatedUser = (req, res, next) => {
    const token = req.cookies.jwt

    if (!token) {
        return next(new ErrorHandler("Please Login"), 401)
    }

    jwt.verify(token, process.env.SECRET_KEY, asyncHandler(async (err, decoded) => {
        if (err) {
            return next(new ErrorHandler("Session Expired Login Again"), 401)
        }
        console.log("decoded id ", decoded.id);
        req.id = decoded.id
        // req.user = await User.findById(decoded.id)
        next()
    }))
}

module.exports = isAuthenticatedUser