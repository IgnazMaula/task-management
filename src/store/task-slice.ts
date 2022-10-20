import { createSlice } from '@reduxjs/toolkit';

import { TaskProps } from './../interface';

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [] as TaskProps[],
        error: false,
    },
    reducers: {
        replaceTasks(state, action) {
            state.tasks = action.payload.tasks;
        },
        addNewTask(state, action) {
            state.tasks = [...state.tasks, action.payload.newTask];
        },
        isError(state, action) {
            state.error = action.payload.error;
        },
    },
});

export default taskSlice;
