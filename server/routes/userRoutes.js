const { login, signup, logout, getUserDetails } = require("../controller/userController")
const isAuthenticatedUser = require("../middleware/auth")

const userRouter = require("express").Router()

userRouter.post("/login", login)

userRouter.post("/signup", signup)

userRouter.get("/logout", logout)

userRouter.get('/me', isAuthenticatedUser, getUserDetails)

module.exports = userRouter