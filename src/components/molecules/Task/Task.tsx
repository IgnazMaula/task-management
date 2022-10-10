import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { TaskProps } from '../../../interface';
import { statuses } from '../../../const';
import styles from './Task.module.css';

export default function Task({ title, closeDate, name, status }: TaskProps) {
    return (
        <React.Fragment>
            <Card variant='outlined' className={styles.card}>
                <CardContent className={styles.cardContent}>
                    <Typography className={styles.cardTitle}>{title}</Typography>
                    <Typography color={'#bababa'} fontSize={14}>
                        Close date: {closeDate}
                    </Typography>
                </CardContent>
                <CardHeader
                    className={styles.cardHeader}
                    avatar={<Avatar className={styles.avatar} alt={name} />}
                    title={name}
                    action={
                        <Chip
                            label={status}
                            color={statuses[status].color}
                            variant='outlined'
                            sx={{ backgroundColor: statuses[status].backgroundColor }}
                        />
                    }
                />
            </Card>
        </React.Fragment>
    );
}
