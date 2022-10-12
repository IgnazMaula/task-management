import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import './App.css';
import { TaskData } from './data';
import BlankPage from './components/templates/BlankPage/BlankPage';
import TaskPage from './components/templates/TaskPage/TaskPage';
import { fetchTaskData } from './store/task-action';
import { useAppDispatch } from './store/hooks';

function App() {
    // Api Mock
    var mock = new MockAdapter(axios);
    mock.onGet('/api/tasks').reply(200, {
        TaskData,
    });

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTaskData());
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<TaskPage />}></Route>
                <Route path='*' element={<BlankPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
