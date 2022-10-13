import React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Paper, Typography, Container, Box } from '@mui/material';
import { useAppSelector } from '../../../store/hooks';
import styles from './GalleryPage.module.css';
import { ImageProps } from '../../../interface';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import ImageCard from '../../molecules/ImageCard/ImageCard';
import GallerySearchBar from '../../atoms/GallerySearchBar/GallerySearchbar';

const mdTheme = createTheme();

const GalleryPage = () => {
    const [open, setOpen] = useState(true);
    const [keyWord, setKeyWord] = useState('');

    const images: ImageProps[] = useAppSelector((state) => state.gallery.images);

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
                                Error - failed to retrieve gallery data
                            </Typography>
                        ) : (
                            <Paper variant='outlined' className={styles.taskField}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingBottom: 2 }}>
                                        <Grid container>
                                            <Grid item xs={6} md={6} lg={6}>
                                                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                                                    Image Gallery
                                                </Typography>
                                            </Grid>
                                            <GallerySearchBar setKeyword={setKeyWord} keyWord={keyWord} />
                                        </Grid>
                                    </Box>
                                    <Box sx={{ marginTop: 1 }}>
                                        {keyWord !== '' && (
                                            <Typography variant='h6' component='div' sx={{ flexGrow: 1, marginLeft: 3, marginBottom: 0 }}>
                                                Search result for '{keyWord}'
                                            </Typography>
                                        )}
                                        <br />
                                        <Grid container spacing={3} sx={{ padding: 3 }}>
                                            {images
                                                .filter(
                                                    (i) =>
                                                        i.title.toLowerCase().includes(keyWord.toLowerCase()) ||
                                                        i.author.toLowerCase().includes(keyWord.toLowerCase())
                                                )
                                                .map((i) => (
                                                    <Grid item xs={12} md={4} lg={4}>
                                                        <ImageCard
                                                            key={i.title}
                                                            title={i.title}
                                                            author={i.author}
                                                            imageUrl={i.imageUrl}
                                                            date={i.date}
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

export default GalleryPage;
