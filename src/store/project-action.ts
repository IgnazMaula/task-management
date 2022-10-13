import axios from 'axios';
import { Dispatch } from 'redux';

import { projectAction } from '.';

export const fetchProjectData = () => {
    return async (dispatch: Dispatch) => {
        const fetchData = async () => {
            const response = await axios('/api/projects');
            if (response.status !== 200) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            const data = await response.data;

            return data;
        };

        try {
            const projectData = await fetchData();
            dispatch(
                projectAction.replaceProjects({
                    projects: projectData.ProjectData.Projects,
                })
            );
        } catch (error) {
            dispatch(projectAction.isError({ error: true }));
        }
    };
};
