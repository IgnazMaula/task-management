import axios from 'axios';
import { Dispatch } from 'redux';

import { integrationAction } from '.';

export const fetchIntegrationData = () => {
    return async (dispatch: Dispatch) => {
        const fetchData = async () => {
            const response = await axios('/api/integrations');
            if (response.status !== 200) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            const data = await response.data;

            return data;
        };

        try {
            const integrationData = await fetchData();
            dispatch(
                integrationAction.replaceIntegrations({
                    integrations: integrationData.IntegrationData.Integrations,
                })
            );
        } catch (error) {
            dispatch(integrationAction.isError({ error: true }));
        }
    };
};
