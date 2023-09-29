const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")

const data = []

const login = (req, res) => {
    const { email, password } = req.body
    const user = data.find(user => user.email === email)
    if (!user) {
        res.status(404)
        throw new Error("User not found! Please register")
    }

    const checkPassword = bcrypt.compareSync(password, user["password"])
    if (!checkPassword) {
        res.status(401)
        throw new Error("Wrong Password!")
    }

    const token = generateToken(user)
    res.status(200)
    res.send({ message: "You are loggedin", token })
}

const signup = (req, res) => {
    const { name, mobile, email, password } = req.body
    const user = data.find(item => item.email === email)  //return undefined if not found

    if (user) {
        res.status(409)
        throw new Error("Email is already registered")
    }

    const hashPassword = bcrypt.hashSync(password, 10)
    data.push({ name, mobile, email, password: hashPassword })
    const token = generateToken({ name, email })

    res.status(201)
    res.send({ message: "You are successfully Registered", token })
}

module.exports = { login, signup }