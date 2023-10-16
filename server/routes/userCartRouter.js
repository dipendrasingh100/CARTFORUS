const { emptyCart } = require("../controller/userCartController")
const verifyToken = require("../middleware/tokenVarification")

const userCartRouter = require("express").Router()

userCartRouter.get("/emptycart", verifyToken, emptyCart)

module.exports = userCartRouter