import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { ProjectProps } from '../../../interface';
import { statuses } from '../../../const';
import styles from './Project.module.css';
import { LinearProgress, linearProgressClasses } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { styled, alpha } from '@mui/material/styles';

export default function Project({ title, description, progress, dayLeft }: ProjectProps) {
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
                    <Avatar className={styles.projectAvatar} variant='square' src={title} alt={title} />
                    <br />
                    <Typography fontSize={18} className={styles.cardTitle}>
                        {title}
                    </Typography>
                    <Typography fontSize={14}>{description}</Typography>
                    <br />
                    <Typography fontSize={14} className={styles.progress}>
                        {progress} %
                    </Typography>
                    <BorderLinearProgress variant='determinate' value={progress} />
                </CardContent>
                <CardHeader
                    className={styles.cardHeader}
                    avatar={<Chip icon={<ScheduleIcon />} label={dayLeft + ' days left'} variant='outlined' />}
                    action={<Avatar sx={{ marginRight: 1, marginTop: 0.3 }} className={styles.avatar} />}
                />
            </Card>
        </React.Fragment>
    );
}
