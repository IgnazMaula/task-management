import * as React from 'react';

import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { statuses } from '../../../const';
import { TaskProps } from '../../../interface';
import styles from './Task.module.scss';

const Task = ({ title, closeDate, name, status }: TaskProps) => {
    return (
        <React.Fragment>
            <Card variant="outlined" className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <Typography className={styles.cardTitle}>{title}</Typography>
                    <Typography color={'#bababa'} fontSize={14}>
                        Close date: {closeDate}
                    </Typography>
                </CardContent>
                <CardHeader
                    className={styles.cardHeader}
                    avatar={<Avatar className={styles.avatar} alt={name} src="name" />}
                    title={name}
                    action={
                        <Chip
                            label={status}
                            color={statuses[status].color}
                            variant="outlined"
                            sx={{ backgroundColor: statuses[status].backgroundColor }}
                        />
                    }
                />
            </Card>
        </React.Fragment>
    );
};

export default Task;
