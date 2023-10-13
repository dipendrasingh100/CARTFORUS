import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import server from "../host";
// import decodeToken from "../utils/decodeToken";


export const login = createAsyncThunk('login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const { data } = await server.post(`/api/auth/login`, { email, password }, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const register = createAsyncThunk('register', async (userData, { rejectWithValue }) => {
    try {
        const { data } = await server.post(`/api/auth/signup`, userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const loadUser = createAsyncThunk('loadUser', async (_, { rejectWithValue }) => {
    try {
        const { data } = await server.get(`/api/auth/me`, { withCredentials: true });
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const logout = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
    try {
        const { data } = await server.get(`/api/auth/logout`, { withCredentials: true });
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})



export const addItemToCart = createAsyncThunk('addItemToCart', async ({ uid, productId, quantity }, { rejectWithValue }) => {
    try {
        const { data } = await server.post(`/api/auth/atc`, { uid, productId, quantity }, { withCredentials: true });

        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const removefromCart = createAsyncThunk('removefromCart', async ({ uid, oid }, { rejectWithValue }) => {
    try {
        const { data } = await server.post(`/api/auth/rfc`, { uid, oid }, { withCredentials: true });

        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const increaseQuantity = createAsyncThunk('increaseQuantity', async ({ uid, oid }, { rejectWithValue }) => {
    try {
        const { data } = await server.post(`/api/auth/increaseqnt`, { uid, oid }, { withCredentials: true });

        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const decreaseQuantity = createAsyncThunk('decreaseQuantity', async ({ uid, oid }, { rejectWithValue }) => {
    try {
        const { data } = await server.post(`/api/auth/decreaseqnt`, { uid, oid }, { withCredentials: true });

        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})


const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: false,
        isAuthenticated: false,
        error: null
    },
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        addToCart: (state, action) => {
            const item = action.payload

            const isItemExist = state.user.cart.find(i => i.productId === item.productId)

            if (isItemExist) {
                state.user.cart = state.user.cart.map(i => {
                    //if item exist then update it with new
                    if (i.productId === item.productId) {
                        return item
                    } else {
                        return i
                    }
                })
            } else {
                state.user.cart = [...state.user.cart, item]
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
        });

        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        //---------- register
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
        });

        builder.addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        //---------- loaduser
        builder.addCase(loadUser.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(loadUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
        });

        builder.addCase(loadUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        //---------- logout
        builder.addCase(logout.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = false
            state.user = null
        });

        builder.addCase(logout.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        //---------- addItemToCart
        builder.addCase(addItemToCart.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(addItemToCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        });

        builder.addCase(addItemToCart.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        //---------- removefromCart
        builder.addCase(removefromCart.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(removefromCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
        });

        builder.addCase(removefromCart.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        //---------- increaseQuantity
        builder.addCase(increaseQuantity.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(increaseQuantity.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
        });

        builder.addCase(increaseQuantity.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        //---------- decreaseQuantity
        builder.addCase(decreaseQuantity.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(decreaseQuantity.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
            state.user = action.payload.user
        });

        builder.addCase(decreaseQuantity.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default userReducer.reducer
export const { clearError, addToCart } = userReducer.actions