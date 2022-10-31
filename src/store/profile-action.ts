import axios from 'axios';
import { ProfileProps } from 'interface';
import { Dispatch } from 'redux';

import { profileAction } from '.';

export const fetchProfileData = () => {
    return async (dispatch: Dispatch) => {
        const fetchData = async () => {
            const response = await axios('/api/profile');
            if (response.status !== 200) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            const data = await response.data;

            return data;
        };

        try {
            const profileData = await fetchData();
            dispatch(
                profileAction.replaceProfile({
                    profile: profileData.ProfileData,
                })
            );
        } catch (error) {
            dispatch(profileAction.isError({ error: true }));
        }
    };
};

export const EditProfileData = (selectedProfile: ProfileProps) => {
    return async (dispatch: Dispatch) => {
        const postData = async () => {
            const response = await axios.put('/api/profile/put', selectedProfile);
            if (response.status !== 200) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            const data = await response.data;

            return data;
        };

        try {
            const profileData = await postData();
            console.log(profileData);
            console.log(selectedProfile);
            dispatch(
                profileAction.replaceProfile({
                    profile: selectedProfile,
                })
            );
        } catch (error) {
            dispatch(profileAction.isError({ error: false }));
        }
    };
};
