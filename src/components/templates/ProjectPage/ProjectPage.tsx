import React from 'react';
import { TaskProps } from '../../../interface';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Task from '../../molecules/Task/Task';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import styles from './ProjectPage.module.css';
import { useAppSelector } from '../../../store/hooks';
import { AppBar, Button, IconButton, InputBase, Tab, Tabs, Toolbar } from '@mui/material';
import Project from '../../molecules/Project/Project';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import NewProject from '../../molecules/NewProject/NewProject';

const mdTheme = createTheme();

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function ProjectPage() {
    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState(0);

    const tasks: TaskProps[] = useAppSelector((state) => state.task.tasks);
    const completedTasks: TaskProps[] = useAppSelector((state) => state.task.completedTasks);
    const canceledTasks: TaskProps[] = useAppSelector((state) => state.task.canceledTasks);
    const error = useAppSelector((state) => state.task.error);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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
                            <Paper variant='outlined' className={styles.taskField}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Grid container>
                                            <Grid item xs={6} md={6} lg={6}>
                                                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                                                    Projects
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6} lg={6}>
                                                <Tabs value={value} onChange={handleChange}>
                                                    <Tab label='All' {...a11yProps(0)} />
                                                    <Tab label='Current' {...a11yProps(1)} />
                                                    <Tab label='Completed' {...a11yProps(2)} />
                                                    <Tab label='Archived' {...a11yProps(3)} />
                                                </Tabs>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ marginTop: 3 }}>
                                        <SearchBar />
                                        <TabPanel value={value} index={0}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <Project
                                                        key='aa'
                                                        title='Weather app'
                                                        description='Cu mei agam inciderint mediocritatem, no melius efficiantur usu.'
                                                        dayLeft={4}
                                                        progress={50}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <Project
                                                        key='aa'
                                                        title='Lada'
                                                        description='Cu mei agam inciderint mediocritatem, no melius efficiantur usu.'
                                                        dayLeft={2}
                                                        progress={20}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <Project
                                                        key='aa'
                                                        title='Lada'
                                                        description='Cu mei agam inciderint mediocritatem, no melius efficiantur usu.'
                                                        dayLeft={2}
                                                        progress={70}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <Project
                                                        key='aa'
                                                        title='Lada'
                                                        description='Cu mei agam inciderint mediocritatem, no melius efficiantur usu.'
                                                        dayLeft={4}
                                                        progress={50}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <Project
                                                        key='aa'
                                                        title='Lada'
                                                        description='Cu mei agam inciderint mediocritatem, no melius efficiantur usu.'
                                                        dayLeft={4}
                                                        progress={50}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <NewProject />
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <NewProject />
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <NewProject />
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                        <TabPanel value={value} index={3}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <NewProject />
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                    </Box>
                                </Box>
                            </Paper>
                        )}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ProjectPage;
