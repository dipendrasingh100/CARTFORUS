const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const ErrorHandler = require("../utils/errorHandler")
const User = require("../models/userModel")

const isAuthenticatedUser = (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler("Please Login first"), 401)
    }

    jwt.verify(token, process.env.SECRET_KEY, asyncHandler(async (err, decoded) => {
        if (err) {
            return next(new ErrorHandler("Invalid Token"), 401)
        }
        req.user = await User.findOne({ "id": decoded.id })
        next()
    }))
}

module.exports = isAuthenticatedUser