import React from 'react';
import { useState, ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

import { assignees, taskTypes } from '../../../data';
import { TaskModalProps } from '../../../interface';
import styles from './TaskModal.module.scss';

const TaskModal = ({ open, handleClose, handleCreate, handleEdit, currentTask }: TaskModalProps) => {
    const [title, setTitle] = useState(currentTask.title);
    const [description, setDescription] = useState(currentTask.description);
    const [taskType, setTaskType] = useState(currentTask.taskType);
    const [assignee, setAssignee] = useState(currentTask.name);
    const [date, setDate] = React.useState<Dayjs | null>(dayjs(currentTask.closeDate, 'MMMM D, YYYY'));

    const handleTaskType = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskType(event.target.value);
    };
    const handleAssignee = (event: ChangeEvent<HTMLInputElement>) => {
        setAssignee(event.target.value);
    };

    const handleChange = (newDate: Dayjs | null) => {
        setDate(newDate);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (currentTask.title === '') {
            handleCreate(event, {
                title: title,
                closeDate: date?.format('LL').toString() || Date.now().toString(),
                name: assignee,
                status: 'Urgent',
                taskType: taskType,
            });
        } else {
            handleEdit(event, {
                id: currentTask.id,
                title: title || '',
                closeDate: date?.format('LL').toString() || Date.now().toString(),
                name: assignee || '',
                description: description,
                status: 'Urgent',
                taskType: taskType,
            });
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Box className={styles.container}>
                        {currentTask.title === '' ? (
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Create Task
                            </Typography>
                        ) : (
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Edit Task
                            </Typography>
                        )}
                        <TextField
                            className={styles.textField}
                            id="filled-select-taskType"
                            select
                            label="Task Type"
                            value={taskType}
                            onChange={handleTaskType}
                            variant="filled"
                        >
                            {taskTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            className={styles.textField}
                            label="Task Name"
                            variant="filled"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            className={styles.textField}
                            label="Description"
                            variant="filled"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <TextField
                            className={styles.textField}
                            id="filled-select-taskType"
                            select
                            label="Assigned to"
                            value={assignee}
                            onChange={handleAssignee}
                            variant="filled"
                        >
                            {assignees.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <DesktopDatePicker
                            className={styles.textField}
                            label="Close date"
                            inputFormat="MM/DD/YYYY"
                            value={date}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <div className={styles.buttonGroup}>
                            <Button variant="outlined" onClick={handleClose}>
                                Cancel
                            </Button>
                            {currentTask.title === '' ? (
                                <Button variant="contained" type="submit">
                                    Create
                                </Button>
                            ) : (
                                <Button variant="contained" type="submit">
                                    Edit
                                </Button>
                            )}
                        </div>
                    </Box>
                </form>
            </Modal>
        </LocalizationProvider>
    );
};

export default TaskModal;
