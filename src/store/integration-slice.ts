import { createSlice } from "@reduxjs/toolkit";

const integrationSlice = createSlice({
    name: "integration",
    initialState: { integrations: [], error: false },
    reducers: {
        replaceIntegrations(state, action) {
            state.integrations = action.payload.integrations;
        },
        isError(state, action) {
            state.error = action.payload.error;
        },
    },
});

export default integrationSlice;
