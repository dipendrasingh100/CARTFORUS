const { login, signup, logout, getUserDetails, addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, resetpassword, createNewPassword } = require("../controller/userController")
const isAuthenticatedUser = require("../middleware/auth")
const verifyToken = require("../middleware/tokenVarification")

const userRouter = require("express").Router()

userRouter.post("/login", login)

userRouter.post("/signup", signup)

userRouter.get("/logout", isAuthenticatedUser, logout)

userRouter.post("/forgot_password", resetpassword)

userRouter.put("/password/reset/:token", createNewPassword)

userRouter.get('/me', verifyToken, getUserDetails)

userRouter.post('/atc', verifyToken, addItemToCart)

userRouter.post('/rfc', verifyToken, removeItemFromCart)

userRouter.post('/increaseqnt', verifyToken, increaseQuantity)

userRouter.post('/decreaseqnt', verifyToken, decreaseQuantity)

module.exports = userRouter