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
import { mainListItems, secondaryListItems } from '../components/listItems';
import Task from '../components/Task';
import Sidebar from '../components/Sidebar';

const mdTheme = createTheme();

function BlankPage() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
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
                            <Typography variant='h3'>Blank Page</Typography>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default BlankPage;
