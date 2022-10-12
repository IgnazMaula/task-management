import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import styles from './BlankPage.module.css';

const mdTheme = createTheme();

function BlankPage() {
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
                    component='main'
                    className={styles.mainContent}
                    sx={{
                        backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
                    }}
                >
                    <Container maxWidth='lg' className={styles.mainContainer}>
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
