import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"
import productsReducer from "./productSlice"
import productDetailsReducer from "./productDetailsSlice"
import forgotPassReducer from "./forgotPasswordSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
        forgotPassword: forgotPassReducer
    }
})