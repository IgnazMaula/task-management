import React from 'react';
import { useEffect } from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import BlankPage from './components/templates/BlankPage/BlankPage';
import GalleryPage from './components/templates/GalleryPage/GalleryPage';
import IntegrationPage from './components/templates/IntegrationPage/IntegrationPage';
import ProjectPage from './components/templates/ProjectPage/ProjectPage';
import TaskPage from './components/templates/TaskPage/TaskPage';
import useApiMock from './hooks/useApiMock';
import { fetchGalleryData } from './store/gallery-action';
import { useAppDispatch } from './store/hooks';
import { fetchIntegrationData } from './store/integration-action';
import { fetchProjectData } from './store/project-action';
import { fetchTaskData } from './store/task-action';

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
