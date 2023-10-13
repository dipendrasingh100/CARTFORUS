const { login, signup, logout, getUserDetails, addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, resetpassword, createNewPassword } = require("../controller/userController")
const isAuthenticatedUser = require("../middleware/auth")

const userRouter = require("express").Router()

userRouter.post("/login", login)

userRouter.post("/signup", signup)

userRouter.get("/logout", isAuthenticatedUser, logout)

userRouter.post("/forgot_password", resetpassword)

userRouter.put("/password/reset/:token", createNewPassword)

userRouter.get('/me', isAuthenticatedUser, getUserDetails)

userRouter.post('/atc', isAuthenticatedUser, addItemToCart)

userRouter.post('/rfc', isAuthenticatedUser, removeItemFromCart)

userRouter.post('/increaseqnt', isAuthenticatedUser, increaseQuantity)

userRouter.post('/decreaseqnt', isAuthenticatedUser, decreaseQuantity)

module.exports = userRouter