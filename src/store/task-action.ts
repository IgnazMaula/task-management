import axios from 'axios';
import { Dispatch } from 'redux';

import { taskAction } from '.';
import { TaskProps } from './../interface';

export const fetchTaskData = () => {
    return async (dispatch: Dispatch) => {
        const fetchData = async () => {
            const response = await axios('/api/tasks');
            if (response.status !== 200) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            const data = await response.data;

            return data;
        };

        try {
            const taskData = await fetchData();
            dispatch(
                taskAction.replaceTasks({
                    tasks: taskData.TaskData.Tasks,
                })
            );
        } catch (error) {
            dispatch(taskAction.isError({ error: true }));
        }
    };
};

export const postTaskData = (newTask: TaskProps) => {
    return async (dispatch: Dispatch) => {
        const postData = async () => {
            const response = await axios.post('/api/tasks/post', newTask);
            if (response.status !== 200) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            const data = await response.data;

            return data;
        };

        try {
            const taskData = await postData();
            console.log(taskData);
            dispatch(
                taskAction.addNewTask({
                    newTask: newTask,
                })
            );
        } catch (error) {
            dispatch(taskAction.isError({ error: false }));
        }
    };
};

export const EditTaskData = (selectedTask: TaskProps) => {
    return async (dispatch: Dispatch) => {
        const postData = async () => {
            const response = await axios.post('/api/tasks/post', selectedTask);
            if (response.status !== 200) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`);
            }
            const data = await response.data;

            return data;
        };

        try {
            const taskData = await postData();
            console.log(taskData);
            dispatch(
                taskAction.editTask({
                    selectedTask: selectedTask,
                })
            );
        } catch (error) {
            dispatch(taskAction.isError({ error: false }));
        }
    };
};
