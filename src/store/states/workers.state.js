import {createSlice} from "@reduxjs/toolkit";

const workersState = createSlice({
    name: "workersState",
    initialState: {
        activeWorker: null,
        workers: []
    },
    reducers: {
        setWorkersState: (state, action) => {
            state.workers = action.payload;
        },
        setActiveWorker: (state, action) => {
            state.activeWorker = action.payload;
        }
    }
})

export default workersState.reducer;
export const { setWorkersState, setActiveWorker } = workersState.actions;