const generateToken = require("./generateToken")

const sendToken = (user, statusCode, res) => {
    const token = generateToken(user._id)

    //options for cookie
    const options = {
        withCredentials: true,
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: true,
        domain: "https://cartforus.netlify.app/",
        sameSite: "none",
    }
    res.cookie("jwt", token, options)
    res.status(statusCode).json({ success: true, token, user })
}

module.exports = sendToken