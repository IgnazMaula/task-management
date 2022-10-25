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
        editTask(state, action) {
            state.tasks[action.payload.selectedTask.id].taskType = action.payload.selectedTask.taskType;
            state.tasks[action.payload.selectedTask.id].title = action.payload.selectedTask.title;
            state.tasks[action.payload.selectedTask.id].description = action.payload.selectedTask.description;
            state.tasks[action.payload.selectedTask.id].name = action.payload.selectedTask.name;
            state.tasks[action.payload.selectedTask.id].status = action.payload.selectedTask.status;
            state.tasks[action.payload.selectedTask.id].closeDate = action.payload.selectedTask.closeDate;
        },
        isError(state, action) {
            state.error = action.payload.error;
        },
    },
});

export default taskSlice;
