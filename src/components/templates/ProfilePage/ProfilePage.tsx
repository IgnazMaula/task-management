import React from 'react';
import { useState, FormEvent } from 'react';

import { Button, Tab, Tabs, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { TabPanelProps, ProfileProps } from '../../../interface';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { EditProfileData } from '../../../store/profile-action';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import styles from './ProfilePage.module.scss';

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

const ProfilePage = () => {
    const profile: ProfileProps = useAppSelector((state) => state.profile.profile);
    const error = useAppSelector((state) => state.task.error);

    const [open, setOpen] = useState(true);
    const [value, setValue] = React.useState(0);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
    const [email, setemail] = useState(profile.email);
    const [city, setcity] = useState(profile.city);
    const [state, setState] = useState(profile.state);
    const [postcode, setPostcode] = useState(profile.postcode);
    const [country, setCountry] = useState(profile.country);
    // const [openModal, setOpenModal] = useState(false);
    // const [openEditModal, setOpenEditModal] = useState(false);
    // const [currentTask, setCurrentTask] = useState<TaskProps>(initialTask);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        event.preventDefault();
        setValue(newValue);
    };

    const dispatch = useAppDispatch();

    // const handleOpen = () => setOpenModal(true);
    // const handleClose = () => setOpenModal(false);
    // const handleEditOpen = (task: TaskProps) => {
    //     setCurrentTask(task);
    //     setOpenEditModal(true);
    // };
    // const handleEditClose = () => setOpenEditModal(false);
    // const handleSubmit = (event: FormEvent<HTMLFormElement>, newTask: TaskProps) => {
    //     event.preventDefault();
    //     dispatch(postTaskData(newTask));
    //     handleClose();
    // };
    const handleEdit = (event: FormEvent<HTMLFormElement>, selectedProfile: ProfileProps) => {
        event.preventDefault();

        dispatch(EditProfileData(selectedProfile));
    };

    console.log(profile, error);

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
                    <Container maxWidth="xl" className={styles.mainContainer}>
                        {error ? (
                            <Typography color="error" align="center">
                                Error - failed to retrieve task data
                            </Typography>
                        ) : (
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} lg={4}>
                                    <Paper variant="outlined" className={styles.taskField}>
                                        <Box className={styles.profileBox}>
                                            <Avatar
                                                className={styles.avatar}
                                                alt={`${profile.firstName} ${profile.lastName}`}
                                                src="name"
                                            />
                                            <Typography variant="h5">
                                                {profile.firstName} {profile.lastName}
                                            </Typography>
                                            <Typography>Software Engineer</Typography>
                                        </Box>
                                        <Typography>Completed Task</Typography>
                                        <Divider className={styles.divider} />
                                        <Typography>Current Task</Typography>
                                        <Divider className={styles.divider} />
                                        <Typography>Canceled Task</Typography>
                                        <Divider className={styles.divider} />
                                        <div className={styles.logoutButton}>
                                            <Button variant="outlined">Log Out</Button>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={8} lg={8}>
                                    <Paper variant="outlined" className={styles.taskField}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChange}>
                                                <Tab label="Account" {...a11yProps(0)} />
                                                <Tab label="Password" {...a11yProps(1)} />
                                                <Tab label="Documents" {...a11yProps(2)} />
                                                <Tab label="Billings" {...a11yProps(3)} />
                                            </Tabs>
                                        </Box>
                                        <TabPanel value={value} index={0}>
                                            <form
                                                onSubmit={(e) =>
                                                    handleEdit(e, {
                                                        firstName,
                                                        lastName: lastName,
                                                        email,
                                                        phoneNumber,
                                                        state,
                                                        country,
                                                        postcode,
                                                        city,
                                                    })
                                                }
                                            >
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} md={6} lg={6}>
                                                        <Typography>Personal Information</Typography>
                                                        <TextField
                                                            className={styles.textField}
                                                            label="First Name"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                        <TextField
                                                            className={styles.textField}
                                                            label="Phone Number"
                                                            value={phoneNumber}
                                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6} lg={6}>
                                                        <br />
                                                        <TextField
                                                            className={styles.textField}
                                                            label="Last Name"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                        />
                                                        <TextField
                                                            className={styles.textField}
                                                            label="email"
                                                            value={email}
                                                            onChange={(e) => setemail(e.target.value)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6} lg={6}>
                                                        <Typography>Location</Typography>
                                                        <TextField
                                                            className={styles.textField}
                                                            label="city"
                                                            value={city}
                                                            onChange={(e) => setcity(e.target.value)}
                                                        />
                                                        <TextField
                                                            className={styles.textField}
                                                            label="State/Area/Region"
                                                            value={state}
                                                            onChange={(e) => setState(e.target.value)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6} lg={6}>
                                                        <br />
                                                        <TextField
                                                            className={styles.textField}
                                                            label="Postcode"
                                                            value={postcode}
                                                            onChange={(e) => setPostcode(e.target.value)}
                                                        />
                                                        <TextField
                                                            className={styles.textField}
                                                            label="Country"
                                                            value={country}
                                                            onChange={(e) => setCountry(e.target.value)}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <div className={styles.buttonGroup}>
                                                    <Button variant="outlined">Cancel</Button>
                                                    <Button variant="contained" type="submit">
                                                        Edit Profile
                                                    </Button>
                                                </div>
                                            </form>
                                        </TabPanel>
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

export default ProfilePage;
