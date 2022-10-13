import React from 'react';

import { Box, Container, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ProjectProps, TabPanelProps } from '../../../interface';
import { useAppSelector } from '../../../store/hooks';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import NewProject from '../../molecules/NewProject/NewProject';
import Project from '../../molecules/Project/Project';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import styles from './ProjectPage.module.css';

const mdTheme = createTheme();

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
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

const ProjectPage = () => {
    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState(0);

    const projects: ProjectProps[] = useAppSelector((state) => state.project.projects);
    const error = useAppSelector((state) => state.project.error);

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
                                Error - failed to retrieve project data
                            </Typography>
                        ) : (
                            <Paper variant="outlined" className={styles.taskField}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Grid container>
                                            <Grid item xs={6} md={6} lg={6}>
                                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                    Projects
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6} lg={6}>
                                                <Tabs value={value} onChange={handleChange}>
                                                    <Tab label="All" {...a11yProps(0)} />
                                                    <Tab label="Current" {...a11yProps(1)} />
                                                    <Tab label="Completed" {...a11yProps(2)} />
                                                    <Tab label="Archived" {...a11yProps(3)} />
                                                </Tabs>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ marginTop: 3 }}>
                                        <SearchBar />
                                        <TabPanel value={value} index={0}>
                                            <Grid container spacing={3}>
                                                {projects.map((p) => (
                                                    <Grid item xs={12} md={4} lg={4}>
                                                        <Project
                                                            key={p.title}
                                                            title={p.title}
                                                            description={p.description}
                                                            dayLeft={p.dayLeft}
                                                            progress={p.progress}
                                                        />
                                                    </Grid>
                                                ))}
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <NewProject />
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            <Grid container spacing={3}>
                                                {projects
                                                    .filter((p) => p.status === 'Current')
                                                    .map((p) => (
                                                        <Grid item xs={12} md={4} lg={4}>
                                                            <Project
                                                                key={p.title}
                                                                title={p.title}
                                                                description={p.description}
                                                                dayLeft={p.dayLeft}
                                                                progress={p.progress}
                                                            />
                                                        </Grid>
                                                    ))}
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <NewProject />
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            <Grid container spacing={3}>
                                                {projects
                                                    .filter((p) => p.status === 'Completed')
                                                    .map((p) => (
                                                        <Grid item xs={12} md={4} lg={4}>
                                                            <Project
                                                                key={p.title}
                                                                title={p.title}
                                                                description={p.description}
                                                                dayLeft={p.dayLeft}
                                                                progress={p.progress}
                                                            />
                                                        </Grid>
                                                    ))}
                                                <Grid item xs={12} md={4} lg={4}>
                                                    <NewProject />
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                        <TabPanel value={value} index={3}>
                                            <Grid container spacing={3}>
                                                {projects
                                                    .filter((p) => p.status === 'Archived')
                                                    .map((p) => (
                                                        <Grid item xs={12} md={4} lg={4}>
                                                            <Project
                                                                key={p.title}
                                                                title={p.title}
                                                                description={p.description}
                                                                dayLeft={p.dayLeft}
                                                                progress={p.progress}
                                                            />
                                                        </Grid>
                                                    ))}
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
};

export default ProjectPage;
