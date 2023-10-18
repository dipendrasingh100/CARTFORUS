const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const ErrorHandler = require("../utils/errorHandler")

//if token comes in each request header
const verifyToken = (req, res, next) => {
    const header = req.headers.authorization
    if (header && header.startsWith("Bearer")) {
        const token = header.split(" ")[1]

        jwt.verify(token, process.env.SECRET_KEY, asyncHandler(async (err, decoded) => {
            if (err) {
                return next(new ErrorHandler("Session Expired Login Again", 401))
            }
            req.id = decoded.id
            // req.user = await User.findById(decoded.id)
            next()
        }))

    } else {
        return next(new ErrorHandler("Please Login", 401))
    }
}

module.exports = verifyToken