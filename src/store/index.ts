import { configureStore } from '@reduxjs/toolkit/';

import gallerySlice from './gallery-slice';
import integrationSlice from './integration-slice';
import projectSlice from './project-slice';
import taskSlice from './task-slice';

const store = configureStore({
    reducer: {
        task: taskSlice.reducer,
        project: projectSlice.reducer,
        integration: integrationSlice.reducer,
        gallery: gallerySlice.reducer,
    },
});

export default store;

export const taskAction = taskSlice.actions;
export const projectAction = projectSlice.actions;
export const integrationAction = integrationSlice.actions;
export const galleryAction = gallerySlice.actions;
