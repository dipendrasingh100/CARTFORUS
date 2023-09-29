const jwt = require("jsonwebtoken")

const generateToken = (user)=>{
    const token = jwt.sign(
        {
            username: user.name,
            email: user.email
        },
        process.env.SECRET_KEY,
        { expiresIn: "2m" }
    )
    return token
}

module.exports = generateToken