import * as React from 'react';

import ScheduleIcon from '@mui/icons-material/Schedule';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { ProjectProps } from '../../../interface';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import styles from './Project.module.scss';

const Project = ({ title, description, progress, dayLeft }: ProjectProps) => {
    return (
        <React.Fragment>
            <Card variant="outlined" className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <Avatar className={styles.projectAvatar} variant="square" src={title} alt={title} />
                    <br />
                    <Typography fontSize={18} className={styles.cardTitle}>
                        {title}
                    </Typography>
                    <Typography fontSize={14}>{description}</Typography>
                    <br />
                    <Typography fontSize={14} className={styles.progress}>
                        {progress} %
                    </Typography>
                    <ProgressBar variant="determinate" value={progress} />
                </CardContent>
                <CardHeader
                    className={styles.cardHeader}
                    avatar={<Chip icon={<ScheduleIcon />} label={dayLeft + ' days left'} variant="outlined" />}
                    action={<Avatar sx={{ marginRight: 1, marginTop: 0.3 }} className={styles.avatar} />}
                />
            </Card>
        </React.Fragment>
    );
};

export default Project;
