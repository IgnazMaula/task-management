import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

interface SearchBarProps {
    keyWord: string;
    setKeyword: any;
}

const GallerySearchBar = ({ setKeyword }: SearchBarProps) => {
    const theme = createTheme({});

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const searchHandler = (e: any) => {
        setKeyword(e.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: '4px',
                    backgroundColor: '#f1f1f1',
                    marginTop: 2,
                    width: '1000px',
                    [theme.breakpoints.up('sm')]: {
                        width: '100%',
                    },
                }}
            >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <InputBase
                    sx={{
                        color: 'inherit',
                        '& .MuiInputBase-input': {
                            padding: theme.spacing(1, 1, 1, 0),
                            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                            transition: theme.transitions.create('width'),
                            width: '1050px',
                        },
                    }}
                    type="search"
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={searchHandler}
                />
            </Box>
        </ThemeProvider>
    );
};

export default GallerySearchBar;
