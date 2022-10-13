import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import { TaskProps } from '../../../interface';
import { useAppSelector } from '../../../store/hooks';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import Task from '../../molecules/Task/Task';
import styles from './TaskPage.module.css';

const mdTheme = createTheme();

const TaskPage = () => {
    const [open, setOpen] = React.useState(true);

    const tasks: TaskProps[] = useAppSelector((state) => state.task.tasks);
    const completedTasks: TaskProps[] = useAppSelector((state) => state.task.completedTasks);
    const canceledTasks: TaskProps[] = useAppSelector((state) => state.task.canceledTasks);
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
                                        {tasks.map((t) => (
                                            <Task
                                                key={t.title}
                                                title={t.title}
                                                closeDate={t.closeDate}
                                                name={t.name}
                                                status={t.status}
                                            />
                                        ))}
                                        <NavLink to="/newtask">
                                            <Typography align="center" className={styles.createNewText} color="#9E9E9E">
                                                CREATE NEW
                                            </Typography>
                                        </NavLink>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant="outlined" className={styles.taskField}>
                                        <Typography variant="h5" className={styles.taskTitle}>
                                            Completed Tasks
                                        </Typography>
                                        <Divider className={styles.divider} />
                                        {completedTasks.map((t) => (
                                            <Task
                                                key={t.title}
                                                title={t.title}
                                                closeDate={t.closeDate}
                                                name={t.name}
                                                status={t.status}
                                            />
                                        ))}
                                        <NavLink to="/newtask">
                                            <Typography align="center" className={styles.createNewText} color="#9E9E9E">
                                                CREATE NEW
                                            </Typography>
                                        </NavLink>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant="outlined" className={styles.taskField}>
                                        <Typography variant="h5" className={styles.taskTitle}>
                                            Canceled Tasks
                                        </Typography>
                                        <Divider className={styles.divider} />
                                        {canceledTasks.map((t) => (
                                            <Task
                                                key={t.title}
                                                title={t.title}
                                                closeDate={t.closeDate}
                                                name={t.name}
                                                status={t.status}
                                            />
                                        ))}
                                        <NavLink to="/newtask">
                                            <Typography align="center" className={styles.createNewText} color="#9E9E9E">
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
};

export default TaskPage;
