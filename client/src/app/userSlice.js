import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import server from "../host";
// import decodeToken from "../utils/decodeToken";


export const login = createAsyncThunk('login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const { data } = await server.post(`/api/auth/login`, { email, password }, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        console.log(data);
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
        console.log(data);
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const loadUser = createAsyncThunk('loadUser', async (_, { rejectWithValue }) => {
    try {
        const { data } = await server.get(`/api/auth/me`, { withCredentials: true });
        console.log(data);
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const logout = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
    try {
        const { data } = await server.get(`/api/auth/logout`, { withCredentials: true });
        console.log(data);
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
            console.log("clearError Called");
            state.error = null
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
            console.log(action.error);
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
            console.log(action.payload);
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
    }
})

export default userReducer.reducer
export const { clearError } = userReducer.actions