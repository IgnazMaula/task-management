import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import BlankPage from './Page/BlankPage';
import TaskPage from './Page/TaskPage';

function App() {
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
