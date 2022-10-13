import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from '@mui/icons-material/Work';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { NavLink } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <NavLink to='/'>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary='My Tasks' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/projects'>
            <ListItemButton>
                <ListItemIcon>
                    <WorkIcon />
                </ListItemIcon>
                <ListItemText primary='Projects' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/integrations'>
            <ListItemButton>
                <ListItemIcon>
                    <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary='Integrations' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/dashboard'>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/schedule'>
            <ListItemButton>
                <ListItemIcon>
                    <WatchLaterIcon />
                </ListItemIcon>
                <ListItemText primary='Schedule' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/message'>
            <ListItemButton>
                <ListItemIcon>
                    <MessageIcon />
                </ListItemIcon>
                <ListItemText primary='Message' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/clients'>
            <ListItemButton>
                <ListItemIcon>
                    <GroupIcon />
                </ListItemIcon>
                <ListItemText primary='Clients' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/socialnetwork'>
            <ListItemButton>
                <ListItemIcon>
                    <PublicIcon />
                </ListItemIcon>
                <ListItemText primary='Social Network' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/imagegallery'>
            <ListItemButton>
                <ListItemIcon>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText primary='Image Gallery' />
            </ListItemButton>
        </NavLink>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component='div' inset>
            Settings
        </ListSubheader>
        <NavLink to='/mainsettings'>
            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary='Main Settings' />
            </ListItemButton>
        </NavLink>
        <NavLink to='/payment'>
            <ListItemButton>
                <ListItemIcon>
                    <CreditCardIcon />
                </ListItemIcon>
                <ListItemText primary='Payment' />
            </ListItemButton>
        </NavLink>
    </React.Fragment>
);
