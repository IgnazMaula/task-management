import { configureStore } from '@reduxjs/toolkit/';
import taskSlice from './task-slice';
import projectSlice from './project-slice';
import integrationSlice from './integration-slice';

const store = configureStore({
    reducer: { task: taskSlice.reducer, project: projectSlice.reducer, integration: integrationSlice.reducer },
});

export default store;

export const taskAction = taskSlice.actions;
export const projectAction = projectSlice.actions;
export const integrationAction = integrationSlice.actions;
