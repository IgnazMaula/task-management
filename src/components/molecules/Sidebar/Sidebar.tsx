import React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';

import { ProfileProps, SideBarProps } from '../../../interface';
import { mainListItems, secondaryListItems } from '../../atoms/ItemList/ItemList';
import styles from './Sidebar.module.scss';

const drawerWidth: number = 240;
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

const Sidebar = ({ open, toggleDrawer }: SideBarProps) => {
    const profile: ProfileProps = useAppSelector((state) => state.profile.profile);

    return (
        <Drawer variant="permanent" open={open}>
            <NavLink to="/profile">
                <Box className={styles.profileBox}>
                    <Avatar className={styles.avatar} alt={`${profile.firstName} ${profile.lastName}`} src="name" />
                    <Typography>
                        {profile.firstName} {profile.lastName}
                    </Typography>
                </Box>
            </NavLink>
            <Toolbar className={styles.toolbar}>
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider className={styles.divider} />
                {secondaryListItems}
            </List>
        </Drawer>
    );
};

export default Sidebar;
