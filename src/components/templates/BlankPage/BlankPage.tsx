import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Sidebar from '../../molecules/Sidebar/Sidebar';
import styles from './BlankPage.module.scss';

const mdTheme = createTheme();

const BlankPage = () => {
    const [open, setOpen] = React.useState(true);
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
                        <Grid container spacing={3}>
                            <Typography variant="h3">Blank Page</Typography>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default BlankPage;
