const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")
const generateToken = require("../utils/generateToken")
const User = require("../models/userModel")
const ErrorHandler = require("../utils/errorHandler")
const sendToken = require("../utils/sendToken")

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password"), 400)
    }

    const user = await User.findOne({ email }).select("+password")  //to include the password in returned document becz default is false
    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 404))
    }

    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }

    sendToken(user, 200, res)
})


const signup = asyncHandler(async (req, res, next) => {
    const { name, mobile, email, password } = req.body

    //check if email already registered
    const userExists = await User.findOne({ email })  //if not found return null, else the document
    if (userExists) {
        return next(new ErrorHandler("Email already registered", 409))
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newuser = await User.create({ name, mobile, email, password: hashPassword })

    // const token = generateToken({ userid: newuser._id })

    sendToken(newuser, 201, res)
}
)

const logout = (req, res) => {
    res.cookie("jwt", null, {
        withCredentials: true,
        expires: new Date(Date.now()),
        httpOnly: false
    })
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}

//Get user details
const getUserDetails = asyncHandler(async (req, res, next) => {
    console.log(req.id);
    // const user = await User.findById(req.id);
    const user = await User.findById(req.id).populate("cart.productId");

    console.log("request made to loaduser");
    res.status(200).json({
        success: true,
        user,
    });
});

//add item to user cart
const addItemToCart = asyncHandler(async (req, res, next) => {
    const { uid, productId, quantity } = req.body

    const user = await User.findOne({ _id: uid, "cart.productId": productId });

    if (user) {
        // If the product already exists in the cart, update the quantity
        await User.updateOne(
            { _id: uid, "cart.productId": productId },
            { $set: { "cart.$.quantity": quantity } }
        );
    } else {
        // If the product doesn't exist, add a new object to the cart array
        await User.updateOne(
            { _id: uid },
            { $push: { cart: { productId, quantity } } }
        );
    }
    // Get the updated user
    const updatedUser = await User.findById(uid).populate("cart.productId");

    res.status(200).json({
        success: true,
        user: updatedUser,
    });
});

const removeItemFromCart = asyncHandler(async (req, res, next) => {
    const { uid, oid } = req.body

    const user = await User.findOne({ _id: uid, 'cart._id': oid });

    if (!user) {
        return next(new ErrorHandler('User not found or product not in cart', 500))
    }

    // Remove the item from the cart using $pull
    await User.updateOne(
        { _id: uid },
        { $pull: { cart: { _id: oid } } }
    );

    const updatedUser = await User.findById(uid).populate("cart.productId");

    res.status(200).json({
        success: true,
        user: updatedUser,
    });

})

const increaseQuantity = asyncHandler(async (req, res, next) => {
    const { uid, oid } = req.body

    const user = await User.findOne({ _id: uid, 'cart._id': oid });
    if (!user) {
        return next(new ErrorHandler('User not found or product not in cart', 404))
    }

    // Find the item in the cart based on the _id
    const cartItem = user.cart.find(item => item._id.toString() === oid);
    if (!cartItem) {
        return next(new ErrorHandler('Product not found in the user\'s cart', 404));
    }

    // before increasing the quantity we can check the stoke
    cartItem.quantity += 1;

    // Save the updated user object
    await user.save();
    const updatedUser = await User.findById(uid).populate("cart.productId");

    res.status(200).json({
        success: true,
        user: updatedUser,
    });

})

const decreaseQuantity = asyncHandler(async (req, res, next) => {
    const { uid, oid } = req.body

    const user = await User.findOne({ _id: uid, 'cart._id': oid });
    if (!user) {
        return next(new ErrorHandler('User not found or product not in cart', 404))
    }

    // Find the item in the cart based on the _id
    const cartItem = user.cart.find(item => item._id.toString() === oid);
    if (!cartItem) {
        return next(new ErrorHandler('Product not found in the user\'s cart', 404));
    }

    // Decrease the quantity by 1, assuming quantity is a positive integer
    if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
    } 

    // Save the updated user object
    await user.save();
    const updatedUser = await User.findById(uid).populate("cart.productId");

    res.status(200).json({
        success: true,
        user: updatedUser,
    });

})


module.exports = { login, signup, logout, getUserDetails, addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity }