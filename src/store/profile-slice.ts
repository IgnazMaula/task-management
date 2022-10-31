import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profile',
    initialState: { profile: {}, error: false },
    reducers: {
        replaceProfile(state, action) {
            state.profile = action.payload.profile;
        },
        isError(state, action) {
            state.error = action.payload.error;
        },
    },
});

export default profileSlice;
