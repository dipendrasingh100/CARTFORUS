const { orderCapture, orderCreate } = require("../controller/orderController")

const orderRouter = require("express").Router()

orderRouter.post("/orders", orderCreate);

orderRouter.post("/orders/:orderID/capture", orderCapture)


module.exports = orderRouter