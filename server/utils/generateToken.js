const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES }
    );
}

module.exports = generateToken