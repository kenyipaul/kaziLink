import { createSlice } from "@reduxjs/toolkit";

const jobsState = createSlice({
    name: "jobs",
    initialState: {
        jobs: []
    },
    reducers: {
        setJobState: (state, action) => {
            state.jobs = action.payload;
        }
    }
})

export default jobsState.reducer;
export const { setJobState } = jobsState.actions;