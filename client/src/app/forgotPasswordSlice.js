import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import server from "../host";

export const forgotPassword = createAsyncThunk('forgotPassword', async (email, { rejectWithValue }) => {
    try {
        const { data } = await server.post(`/api/auth/forgot_password`, { email });
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const resetPassword = createAsyncThunk('resetPassword', async ({ password, confirmPassword, token }, { rejectWithValue }) => {
    try {
        const { data } = await server.put(`/api/auth/password/reset/${token}`, { password, confirmPassword });
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const forgotPassReducer = createSlice({
    name: 'forgotPassword',
    initialState: {
        message: null,
        success: false,
        isLoading: false,
        error: null
    },
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        clearMessage: (state) => {
            state.message = null
        },
        setLoading: (state) => {
            state.isLoading = true
        },
    },
    extraReducers: (builder) => {
        //forgot password
        builder.addCase(forgotPassword.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoading = false
            state.message = action.payload.message
        });

        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        //reset password
        builder.addCase(resetPassword.pending, (state) => {
            state.isLoading = true
        });

        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = action.payload.success
        });

        builder.addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }

})

export default forgotPassReducer.reducer
export const { clearError, clearMessage, setLoading } = forgotPassReducer.actions