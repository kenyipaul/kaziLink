import userState from "./states/user.state"
import { configureStore } from "@reduxjs/toolkit"
import jobsState from "./states/jobs.state.js";
import workersState from "./states/workers.state.js";

const store = configureStore({
    reducer: {
        userState,
        jobsState,
        workersState,
    }
})

export default store;