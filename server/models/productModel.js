const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Please enter product title"] },
    act_price: { type: Number, required: [true, "Please enter product price"], maxLength: [8, "Price cannot exceed 8 characters"] },
    dis_price: { type: Number, maxLength: [8, "Price cannot exceed 8 characters"] },
    discount: { type: Number },
    rating: { type: Number, default: 0 },
    offers: [{ type: [String] }],
    highlights: { type: [String] },
    images: { type: [String], required: true },
    description: { type: String },
    category: { type: String, required: [true, "Please enter product category"] },
    stock: { type: Number, default: 10 },
    numofreviews: { type: Number, default: 0 },
    brand: String,
    reviews: [
        {
            name: {
                type: String,
                // required: true
            },
            rating: {
                type: Number,
                // required: true
            },
            comment: {
                type: String
            }
        }
    ],
    featured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)