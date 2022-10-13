import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
    name: 'project',
    initialState: { projects: [], error: false },
    reducers: {
        replaceProjects(state, action) {
            state.projects = action.payload.projects;
        },
        isError(state, action) {
            state.error = action.payload.error;
        },
    },
});

export default projectSlice;
