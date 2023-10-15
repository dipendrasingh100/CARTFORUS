
const Product = require("../models/productModel")
const ApiFeatures = require("../utils/apifeatures")
const ErrorHandler = require("../utils/errorHandler")
const asyncHandler = require("express-async-handler")


const createProduct = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
})

const getAllProducts = asyncHandler(async (req, res, next) => {
    const resultPerPage = 5
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter();

    let products = await apiFeature.query;

    let filteredProductsCount = products.length

    apiFeature.pagination(resultPerPage)

    products = await apiFeature.query

    res.status(200).json({
        success: true,
        productCount,
        resultPerPage,
        filteredProductsCount,
        products,
    })
})

//GET : get product details
const getProductDetails = asyncHandler(async (req, res, next) => {
    const product_id = req.params.id

    let product = await Product.findById(product_id)
    if (!product) {
        return next(new ErrorHandler(`Product not found!`, 404))
    }

    let filterp = [...new Set(product.images)]
    product.images = filterp

    res.status(200).json({ success: true, product })
})


//Get: Featured products
const getFeatured = asyncHandler(async (req, res, next) => {
    const featured = await Product.find({ "featured": true })
    const deals = await Product.find({ "discount": { $gt: 50 } })
    res.status(200).json({ success: true, featured, deals })
})

module.exports = { getAllProducts, createProduct, getProductDetails, getFeatured };