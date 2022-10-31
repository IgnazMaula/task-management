import React from 'react';
import { useState, FormEvent } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TaskModal from 'components/organisms/TaskModal/TaskModal';
import { postTaskData, EditTaskData } from 'store/task-action';

import { TaskProps } from '../../../interface';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import Task from '../../molecules/Task/Task';
import styles from './TaskPage.module.scss';

const mdTheme = createTheme();

const initialTask: TaskProps = {
    title: '',
    closeDate: 'January 1, 2022',
    name: 'Lindsey Stroud',
    status: 'Default',
    taskType: 'Task',
    description: '',
};

const TaskPage = () => {
    const [open, setOpen] = useState(true);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [currentTask, setCurrentTask] = useState<TaskProps>(initialTask);

    const dispatch = useAppDispatch();

    const handleOpenModal = (task: TaskProps) => {
        setCurrentTask(task);
        setOpenEditModal(true);
    };
    const handleCloseModal = () => setOpenEditModal(false);

    const handleCreate = (event: FormEvent<HTMLFormElement>, newTask: TaskProps) => {
        event.preventDefault();
        dispatch(postTaskData(newTask));
        handleCloseModal();
    };
    const handleEdit = (event: FormEvent<HTMLFormElement>, selectedTask: TaskProps) => {
        event.preventDefault();
        dispatch(EditTaskData(selectedTask));
        handleCloseModal();
    };

    const tasks: TaskProps[] = useAppSelector((state) => state.task.tasks);
    const error = useAppSelector((state) => state.task.error);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box className={styles.box}>
                <CssBaseline />
                <Sidebar open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
                <Box
                    component="main"
                    className={styles.mainContent}
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                    }}
                >
                    <Container maxWidth="lg" className={styles.mainContainer}>
                        {error ? (
                            <Typography color="error" align="center">
                                Error - failed to retrieve task data
                            </Typography>
                        ) : (
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant="outlined" className={styles.taskField}>
                                        <Typography variant="h5" className={styles.taskTitle}>
                                            Tasks
                                        </Typography>
                                        <Divider className={styles.divider} />
                                        {tasks
                                            .filter((t) => t.taskType === 'Task')
                                            .map((t) => (
                                                <button onClick={() => handleOpenModal(t)} className={styles.editClick}>
                                                    <Task
                                                        key={t.id}
                                                        title={t.title}
                                                        closeDate={t.closeDate}
                                                        name={t.name}
                                                        status={t.status}
                                                    />
                                                </button>
                                            ))}
                                        <Button
                                            variant="text"
                                            size="large"
                                            onClick={() => handleOpenModal(initialTask)}
                                            className={styles.createNewText}
                                        >
                                            CREATE NEW
                                        </Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant="outlined" className={styles.taskField}>
                                        <Typography variant="h5" className={styles.taskTitle}>
                                            Completed Tasks
                                        </Typography>
                                        <Divider className={styles.divider} />
                                        {tasks
                                            .filter((t) => t.taskType === 'CompletedTask')
                                            .map((t) => (
                                                <button onClick={() => handleOpenModal(t)} className={styles.editClick}>
                                                    <Task
                                                        key={t.id}
                                                        title={t.title}
                                                        closeDate={t.closeDate}
                                                        name={t.name}
                                                        status={t.status}
                                                    />
                                                </button>
                                            ))}
                                        <Button
                                            variant="text"
                                            size="large"
                                            onClick={() => handleOpenModal(initialTask)}
                                            className={styles.createNewText}
                                        >
                                            CREATE NEW
                                        </Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant="outlined" className={styles.taskField}>
                                        <Typography variant="h5" className={styles.taskTitle}>
                                            Canceled Tasks
                                        </Typography>
                                        <Divider className={styles.divider} />
                                        {tasks
                                            .filter((t) => t.taskType === 'CanceledTask')
                                            .map((t) => (
                                                <button onClick={() => handleOpenModal(t)} className={styles.editClick}>
                                                    <Task
                                                        key={t.id}
                                                        title={t.title}
                                                        closeDate={t.closeDate}
                                                        name={t.name}
                                                        status={t.status}
                                                    />
                                                </button>
                                            ))}
                                        <Button
                                            variant="text"
                                            size="large"
                                            onClick={() => handleOpenModal(initialTask)}
                                            className={styles.createNewText}
                                        >
                                            CREATE NEW
                                        </Button>
                                    </Paper>
                                </Grid>
                            </Grid>
                        )}
                    </Container>
                </Box>
            </Box>
            {openEditModal && (
                <TaskModal
                    open={openEditModal}
                    handleClose={handleCloseModal}
                    handleCreate={handleCreate}
                    handleEdit={handleEdit}
                    currentTask={currentTask}
                />
            )}
        </ThemeProvider>
    );
};

export default TaskPage;
