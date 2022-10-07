import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { TaskData } from './data';

import './App.css';
import BlankPage from './Page/BlankPage';
import TaskPage from './Page/TaskPage';
import { useEffect } from 'react';
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
