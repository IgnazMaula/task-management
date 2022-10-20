import React from 'react';
import { useState, ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { assignees, taskTypes } from '../../../data';
import { NewTaskModelProps } from '../../../interface';
import styles from './NewTaskModal.module.css';

const NewTaskModal = ({ open, handleClose, handleSubmit }: NewTaskModelProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskType, setTaskType] = useState('Task');
    const [assignee, setAssignee] = useState('Lindsey Stroud');

    const handleTaskType = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskType(event.target.value);
    };
    const handleAssignee = (event: ChangeEvent<HTMLInputElement>) => {
        setAssignee(event.target.value);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form
                onSubmit={(e) =>
                    handleSubmit(e, {
                        title: title,
                        closeDate: 'May 22, 2022',
                        name: assignee,
                        status: 'Urgent',
                        taskType: taskType,
                    })
                }
            >
                <Box className={styles.container}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create New Task
                    </Typography>
                    <TextField
                        className={styles.textField}
                        id="filled-select-taskType"
                        select
                        label="Fill"
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
                    <div className={styles.buttonGroup}>
                        <Button variant="outlined" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" type="submit">
                            Create
                        </Button>
                    </div>
                </Box>
            </form>
        </Modal>
    );
};

export default NewTaskModal;
