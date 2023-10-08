const jwt = require("jsonwebtoken")

//if token comes in each request header
const verifyToken = (req, res, next) => {
    const header = req.headers.authorization
    if (header && header.startsWith("Bearer")) {
        const token = header.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401)
                throw new Error("Invalid token")
            }
            req.user = decoded
            next()
        })
    }else{
        res.status(400)
        throw new Error("Token Not Found")
    }
}

module.exports = verifyToken