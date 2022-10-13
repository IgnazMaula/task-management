import { galleryAction } from '.';
import axios from 'axios';
import { Dispatch } from 'redux';

export const fetchGalleryData = () => {
    return async (dispatch: Dispatch) => {
        const fetchData = async () => {
            const response = await axios('/api/gallery');
            if (response.status !== 200) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            const data = await response.data;

            return data;
        };

        try {
            const galleryData = await fetchData();
            dispatch(
                galleryAction.replaceGallery({
                    images: galleryData.GalleryData.Images,
                })
            );
        } catch (error) {
            dispatch(galleryAction.isError({ error: true }));
        }
    };
};
