const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const ErrorHandler = require("../utils/errorHandler")


const emptyCart = asyncHandler(async (req, res, next) => {

    const user = await User.findById(req.id)
    if (!user) {
        return next(new ErrorHandler(`No such user found`, 401));
    }
    user.cart = []
    await user.save()

    res.status(200).json({
        success: true,
        user,
    });
})

module.exports = { emptyCart }