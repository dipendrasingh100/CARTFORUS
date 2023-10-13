const { login, signup, logout, getUserDetails, addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = require("../controller/userController")
const isAuthenticatedUser = require("../middleware/auth")

const userRouter = require("express").Router()

userRouter.post("/login", login)

userRouter.post("/signup", signup)

userRouter.get("/logout", isAuthenticatedUser, logout)

userRouter.get('/me', isAuthenticatedUser, getUserDetails)

userRouter.post('/atc', isAuthenticatedUser, addItemToCart)

userRouter.post('/rfc', isAuthenticatedUser, removeItemFromCart)

userRouter.post('/increaseqnt', isAuthenticatedUser, increaseQuantity)

userRouter.post('/decreaseqnt', isAuthenticatedUser, decreaseQuantity)

module.exports = userRouter