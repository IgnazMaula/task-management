import React from "react";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { TaskData, ProjectData, IntegrationData, GalleryData } from "../data";

const useApiMock = () => {
    var mock = new MockAdapter(axios);
    mock.onGet("/api/tasks").reply(200, {
        TaskData,
    });
    mock.onGet("/api/projects").reply(200, {
        ProjectData,
    });
    mock.onGet("/api/integrations").reply(200, {
        IntegrationData,
    });
    mock.onGet("/api/gallery").reply(200, {
        GalleryData,
    });
};

export default useApiMock;
