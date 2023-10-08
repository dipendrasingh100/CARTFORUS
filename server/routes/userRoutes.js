const { login, signup, logout } = require("../controller/userController")

const userRouter = require("express").Router()

userRouter.post("/login", login)

userRouter.post("/signup", signup)

userRouter.get("/logout", logout)

module.exports = userRouter