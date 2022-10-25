import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { GalleryData, IntegrationData, ProjectData, TaskData } from '../data';

const useApiMock = () => {
    var mock = new MockAdapter(axios);

    mock.onGet('/api/tasks').reply(200, {
        TaskData,
    });
    mock.onGet('/api/projects').reply(200, {
        ProjectData,
    });
    mock.onGet('/api/integrations').reply(200, {
        IntegrationData,
    });
    mock.onGet('/api/gallery').reply(200, {
        GalleryData,
    });
    mock.onPost('/api/tasks/post').reply(200, {
        message: 'Success',
    });
    mock.onPut('/api/tasks/put').reply(200, {
        message: 'Success',
    });
};

export default useApiMock;
