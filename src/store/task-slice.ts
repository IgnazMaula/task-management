import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: { tasks: [], completedTasks: [], canceledTasks: [], error: false },
    reducers: {
        replaceTasks(state, action) {
            state.tasks = action.payload.tasks;
            state.completedTasks = action.payload.completedTasks;
            state.canceledTasks = action.payload.canceledTasks;
        },
        isError(state, action) {
            state.error = action.payload.error;
        },
    },
});

export default taskSlice;
