import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Paper, Typography, Container, Box } from '@mui/material';
import { useAppSelector } from '../../../store/hooks';
import styles from './IntegrationPage.module.css';
import { IntegrationProps } from '../../../interface';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import Integration from '../../molecules/Integration/Integration';
import SearchBar from '../../atoms/SearchBar/SearchBar';

const mdTheme = createTheme();

const IntegrationPage = () => {
    const [open, setOpen] = React.useState(true);

    const integrations: IntegrationProps[] = useAppSelector((state) => state.integration.integrations);
    const error = useAppSelector((state) => state.integration.error);

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
                                Error - failed to retrieve integration data
                            </Typography>
                        ) : (
                            <Paper variant='outlined' className={styles.taskField}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingBottom: 2 }}>
                                        <Grid container>
                                            <Grid item xs={6} md={6} lg={6}>
                                                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                                                    Integrations
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ marginTop: 3 }}>
                                        <SearchBar />
                                        <br />
                                        <Typography fontSize={15} className={styles.integrationStyle} color='#9E9E9E'>
                                            Your Integration
                                        </Typography>
                                        <Grid container spacing={3} sx={{ padding: 3 }}>
                                            {integrations
                                                .filter((i) => i.isConnect)
                                                .map((i) => (
                                                    <Grid item xs={12} md={4} lg={4}>
                                                        <Integration
                                                            key={i.title}
                                                            title={i.title}
                                                            description={i.description}
                                                            imageUrl={i.imageUrl}
                                                            isConnect={i.isConnect}
                                                        />
                                                    </Grid>
                                                ))}
                                        </Grid>
                                        <Typography fontSize={15} className={styles.integrationStyle} color='#9E9E9E'>
                                            Popular Integration
                                        </Typography>
                                        <Grid container spacing={3} sx={{ padding: 3 }}>
                                            {integrations
                                                .filter((i) => !i.isConnect)
                                                .map((i) => (
                                                    <Grid item xs={12} md={4} lg={4}>
                                                        <Integration
                                                            key={i.title}
                                                            title={i.title}
                                                            description={i.description}
                                                            imageUrl={i.imageUrl}
                                                            isConnect={i.isConnect}
                                                        />
                                                    </Grid>
                                                ))}
                                        </Grid>
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

export default IntegrationPage;
