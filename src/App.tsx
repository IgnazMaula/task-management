import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { useAppDispatch } from "./store/hooks";
import BlankPage from "./components/templates/BlankPage/BlankPage";
import TaskPage from "./components/templates/TaskPage/TaskPage";
import ProjectPage from "./components/templates/ProjectPage/ProjectPage";
import { fetchTaskData } from "./store/task-action";
import { fetchProjectData } from "./store/project-action";
import { fetchIntegrationData } from "./store/integration-action";
import { fetchGalleryData } from "./store/gallery-action";
import IntegrationPage from "./components/templates/IntegrationPage/IntegrationPage";
import GalleryPage from "./components/templates/GalleryPage/GalleryPage";
import useApiMock from "./hooks/useApiMock";

function App() {
    // Api Mock
    useApiMock();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTaskData());
        dispatch(fetchProjectData());
        dispatch(fetchIntegrationData());
        dispatch(fetchGalleryData());
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskPage />}></Route>
                <Route path="/projects" element={<ProjectPage />}></Route>
                <Route path="/integrations" element={<IntegrationPage />}></Route>
                <Route path="/imagegallery" element={<GalleryPage />}></Route>
                <Route path="*" element={<BlankPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
