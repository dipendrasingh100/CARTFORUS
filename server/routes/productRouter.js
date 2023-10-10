const { getAllProducts, createProduct, getProductDetails, getProductsByCategory } = require("../controller/dataController")
const isAuthenticatedUser = require("../middleware/auth")

const productRouter = require("express").Router()


productRouter.get('/products', getAllProducts)

productRouter.get("/product/:id", getProductDetails)

productRouter.post('/product/new', createProduct)

module.exports = productRouter