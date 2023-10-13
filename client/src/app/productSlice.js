import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import server from "../host";

export const fetchProducts = createAsyncThunk("fetchProducts", async ({ keyword = "", currentPage = 1, category }, { rejectWithValue }) => {
    try {

        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}`

        if (category) {
            link += `&category=${category}`;
        }
        const { data } = await server.get(link)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const featuredProducts = createAsyncThunk("featuredProducts", async (_, { rejectWithValue }) => {
    try {
        let link = `/api/v1/product/featured`
        const { data } = await server.get(link)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const productReducer = createSlice({
    name: "products",
    initialState: {
        products: null,
        featured: null,
        topdeals: null,
        productsCount: 0,
        isLoading: false,
        resultPerPage: 0,
        error: null,
        filteredProductsCount: 0
    },
    reducers: {
        clearError: (state) => {
            state.error = null
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
            state.resultPerPage = action.payload.resultPerPage
            state.filteredProductsCount = action.payload.filteredProductsCount
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log(action.error);
            state.error = action.payload
        })

        //get featured
        builder.addCase(featuredProducts.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(featuredProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.featured = action.payload.featured
            state.topdeals = action.payload.deals
        });

        builder.addCase(featuredProducts.rejected, (state, action) => {
            console.log(action.error);
            state.error = action.payload
        })

    }
})

export default productReducer.reducer;
export const { clearError } = productReducer.actions