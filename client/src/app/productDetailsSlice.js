import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import server from "../host";

export const fetchProductDetails = createAsyncThunk("fetchProductDetails", async (id, { rejectWithValue }) => {
    try {
        const { data } = await server.get(`/api/v1/product/${id}`)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const productSlice = createSlice({
    name: "productDetails",
    initialState: {
        product: null,
        isLoading: false,
        error: null
    },
    reducers: {
        clearError: (state) => {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetails.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.product = action.payload.product
        });

        builder.addCase(fetchProductDetails.rejected, (state, action) => {
            console.log(action.error);
            state.error = action.payload
        })
    }
})

export default productSlice.reducer
export const { clearError } = productSlice.actions