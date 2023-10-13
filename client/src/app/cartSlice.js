import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import server from "../host";

export const addItemsToCart = createAsyncThunk('addItemsToCart', async ({ pid, quantity }, { rejectWithValue }) => {
    try {
        const { data } = await server.get(`/api/v1/product/${pid}`, {
            withCredentials: true
        });
        console.log(data);
        return data.product
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        isLoading: false,
        error: null
    },
    reducers: {
        addToCart: (state, action) => {

        },
        removeFromCart: (state, action) => {

        }
    },

    extraReducers: (builder) => {
        builder.addCase(addItemsToCart.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(addItemsToCart.fulfilled, (state, action) => {
            state.isLoading = false
            const item = action.payload

            const isItemExist = state.cartItems.find(i => i.productId === item.productId)

            if (isItemExist) {
                state.cartItems = state.cartItems.map(i => {
                    //if item exist then update it with new
                    if (i.productId === item.productId) {
                        return item
                    } else {
                        return i
                    }
                })
            } else {
                state.cartItems = [...state.cartItems, item]
            }
        });

        builder.addCase(addItemsToCart.rejected, (state, action) => {
            console.log(action.error);
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions