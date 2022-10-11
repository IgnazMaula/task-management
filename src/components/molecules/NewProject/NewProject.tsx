import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { statuses } from '../../../const';
import styles from './NewProject.module.css';
import { LinearProgress, linearProgressClasses } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function NewProject() {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    return (
        <React.Fragment>
            <Card variant='outlined' className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <AddCircleIcon color='primary' />
                    <Typography align='center' className={styles.createNewText} color='#9E9E9E'>
                        CREATE NEW
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
