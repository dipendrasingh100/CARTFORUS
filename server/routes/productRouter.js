const { getAllProducts, createProduct } = require("../controller/dataController")
const isAuthenticatedUser = require("../middleware/auth")

const productRouter = require("express").Router()


productRouter.get('/products', getAllProducts)

productRouter.post('/product/new', createProduct)

module.exports = productRouter