import userState from "./states/user.state"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        userState,
    }
})

export default store;