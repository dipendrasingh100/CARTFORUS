import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {

        },
        removeFromCart: (state, action) => {

        }
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions