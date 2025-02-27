import { createSlice } from "@reduxjs/toolkit";

const userState = createSlice({
    name: "userState",
    initialState: {
        authorized: true,
        userData: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload
        },
        
        setAuthorized: (state, action) => {
            state.authorized = action.payload
        }
    }
})


export default userState.reducer;
export const { setUser, setAuthorized } = userState.actions;