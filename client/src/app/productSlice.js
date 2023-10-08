import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import server from "../host";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const { data } = await server.get("/api/v1/products")
    return data
})

const productReduce = createSlice({
    name: "products",
    initialState: {
        products: null,
        productsCount: 0,
        isLoading: false,
        isError: false
    },
    reducers: {
        clearError: (state) => {
            state.isError = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload.products
            state.productsCount = action.payload.productCount
        });

        builder.addCase(fetchProducts.rejected, (state) => {
            state.isError = true
        })

    }
})

export default productReduce.reducer;