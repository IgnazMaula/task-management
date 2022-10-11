import { configureStore } from '@reduxjs/toolkit/';
import taskSlice from './task-slice';
import projectSlice from './project-slice';

const store = configureStore({
    reducer: { task: taskSlice.reducer, project: projectSlice.reducer },
});

export default store;

export const taskAction = taskSlice.actions;
export const projectAction = projectSlice.actions;
