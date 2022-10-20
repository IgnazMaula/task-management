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
                    completedTasks: taskData.TaskData.CompletedTasks,
                    canceledTasks: taskData.TaskData.CanceledTasks,
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
            console.log(data);

            return data;
        };

        try {
            const taskData = await postData();
            console.log(taskData);
            console.log(taskAction);
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
