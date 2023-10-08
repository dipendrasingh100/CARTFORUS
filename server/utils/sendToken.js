const sendToken = (token, statusCode, res) => {
    //options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 60 * 1000
        ),
        httpOnly: true,
    }
    res.status(statusCode).cookie("token", token, options).json({ success: true, token })
}

module.exports = sendToken