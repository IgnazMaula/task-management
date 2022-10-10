import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { TaskProps } from '../interface';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Task from '../components/Task';
import Sidebar from '../components/Sidebar';
import styles from './TaskPage.module.css';
import { style } from '@mui/system';

const mdTheme = createTheme();

function TaskPage() {
    const [open, setOpen] = React.useState(true);
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([]);
    const [canceledTasks, setCanceledTasks] = useState<TaskProps[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios('/api/tasks');
                if (response.status !== 200) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                setTasks(response.data.TaskData.Tasks);
                setCompletedTasks(response.data.TaskData.CompletedTasks);
                setCanceledTasks(response.data.TaskData.CanceledTasks);
            } catch (error: any) {
                setError(true);
            }
        };
        getData();
    }, []);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box className={styles.box}>
                <CssBaseline />
                <Sidebar open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
                <Box
                    component='main'
                    className={styles.mainContent}
                    sx={{
                        backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
                    }}
                >
                    <Container maxWidth='lg' className={styles.mainContainer}>
                        {error ? (
                            <Typography color='error' align='center'>
                                Error - failed to retrieve task data
                            </Typography>
                        ) : (
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant='outlined' className={styles.taskField}>
                                        <Typography variant='h5' className={styles.taskTitle}>
                                            Tasks
                                        </Typography>
                                        <Divider className={styles.divider} />
                                        {tasks.map((t) => (
                                            <Task key={t.title} title={t.title} closeDate={t.closeDate} name={t.name} status={t.status} />
                                        ))}
                                        <NavLink to='/newtask'>
                                            <Typography align='center' className={styles.createNewText} color='#9E9E9E'>
                                                CREATE NEW
                                            </Typography>
                                        </NavLink>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant='outlined' className={styles.taskField}>
                                        <Typography variant='h5' className={styles.taskTitle}>
                                            Completed Tasks
                                        </Typography>
                                        <Divider className={styles.divider} />
                                        {completedTasks.map((t) => (
                                            <Task key={t.title} title={t.title} closeDate={t.closeDate} name={t.name} status={t.status} />
                                        ))}
                                        <NavLink to='/newtask'>
                                            <Typography align='center' className={styles.createNewText} color='#9E9E9E'>
                                                CREATE NEW
                                            </Typography>
                                        </NavLink>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant='outlined' className={styles.taskField}>
                                        <Typography variant='h5' className={styles.taskTitle}>
                                            Canceled Tasks
                                        </Typography>
                                        <Divider className={styles.divider} />
                                        {canceledTasks.map((t) => (
                                            <Task key={t.title} title={t.title} closeDate={t.closeDate} name={t.name} status={t.status} />
                                        ))}
                                        <NavLink to='/newtask'>
                                            <Typography align='center' className={styles.createNewText} color='#9E9E9E'>
                                                CREATE NEW
                                            </Typography>
                                        </NavLink>
                                    </Paper>
                                </Grid>
                            </Grid>
                        )}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default TaskPage;
