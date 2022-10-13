import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
    name: "gallery",
    initialState: { images: [], error: false },
    reducers: {
        replaceGallery(state, action) {
            state.images = action.payload.images;
        },
        isError(state, action) {
            state.error = action.payload.error;
        },
    },
});

export default gallerySlice;
