import { createSlice } from "@reduxjs/toolkit";
import decodeToken from "../utils/decodeToken";

const userReducer = createSlice({
    name: "user",
    initialState: {
        loggedin: decodeToken().loggedin,
        username: decodeToken().username
    },
    reducers: {
        login: (state, action) => {
            state.loggedin = 1
            state.username = action.payload
        },
        logout: (state) => {
            state.loggedin = 0
            state.username = ""
        }
    }

})

export default userReducer.reducer
export const { login, logout } = userReducer.actions