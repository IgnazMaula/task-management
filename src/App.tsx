import React from 'react';

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './components/listItems';
import Task from './components/Task';

import './App.css';

function Copyright(props: any) {
    return (
        <Typography variant='body2' color='#9E9E9E' align='center' {...props}>
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const mdTheme = createTheme();

function App() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Drawer variant='permanent' open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component='nav'>
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
                <Box
                    component='main'
                    sx={{
                        backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={4} lg={4}>
                                <Paper
                                    variant='outlined'
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 865,
                                    }}
                                >
                                    <Typography variant='h5' sx={{ fontWeight: 'bold', paddingTop: 1 }}>
                                        Tasks
                                    </Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Task title='Fresh Desk' closeDate='May 22, 2022' name='Lindsey Stroud' status='Urgent' />
                                    <Task title='Skype' closeDate='May 28, 2022' name='George Fields' status='Default' />
                                    <Typography align='center' sx={{ fontWeight: 'bold', paddingTop: 2 }} color='#9E9E9E'>
                                        CREATE NEW
                                    </Typography>
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={4}>
                                <Paper
                                    variant='outlined'
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 865,
                                    }}
                                >
                                    <Typography variant='h5' sx={{ fontWeight: 'bold', paddingTop: 1 }}>
                                        Completed Tasks
                                    </Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Task title='Netflix' closeDate='April 12, 2022' name='Rebecca Moore' status='Completed' />
                                    <Task title='Instagram' closeDate='April 11, 2022' name='Nicci Troiani' status='Paid' />
                                    <Task title='Google' closeDate='April 7, 2022' name='Jones Dermot' status='Paid' />
                                    <Task title='Clockify' closeDate='April 5, 2022' name='Jane Doe' status='Completed' />
                                    <Task title='Slack' closeDate='April 2, 2022' name='Franz Ferdinand' status='Completed' />
                                    <Typography align='center' sx={{ fontWeight: 'bold', paddingTop: 2 }} color='#9E9E9E'>
                                        CREATE NEW
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4}>
                                <Paper
                                    variant='outlined'
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 865,
                                    }}
                                >
                                    <Typography variant='h5' sx={{ fontWeight: 'bold', paddingTop: 1 }}>
                                        Canceled Tasks
                                    </Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Task title='BBC' closeDate='April 2, 2022' name='Nikol Ricci' status='Canceled' />
                                    <Typography align='center' sx={{ fontWeight: 'bold', paddingTop: 2 }} color='#9E9E9E'>
                                        CREATE NEW
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
