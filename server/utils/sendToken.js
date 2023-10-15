const generateToken = require("./generateToken")

const sendToken = (user, statusCode, res) => {
    const token = generateToken(user._id)

    //options for cookie
    const options = {
        httpOnly: true,
        secure: true,
        withCredentials: true,
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        sameSite: 'none'
    }
    res.cookie("jwt", token, options)
    res.status(statusCode).json({ success: true, token, user })
}

module.exports = sendToken