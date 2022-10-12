import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { IntegrationProps } from '../../../interface';
import styles from './Integration.module.css';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';

export default function Integration({ title, description, imageUrl, isConnect }: IntegrationProps) {
    return (
        <React.Fragment>
            <Card variant='outlined' className={styles.card}>
                <img className={styles.appIcon} src={imageUrl} alt={title} />
                <CardContent className={styles.cardContent}>
                    <Typography fontSize={18} className={styles.cardTitle}>
                        {title}
                    </Typography>
                    <Typography fontSize={14}>{description}</Typography>
                    <br />
                </CardContent>
                <CardHeader
                    className={styles.cardHeader}
                    avatar={
                        isConnect ? (
                            <Button size='medium' disabled>
                                CONNECTED
                            </Button>
                        ) : (
                            <Button size='medium'>CONNECT</Button>
                        )
                    }
                    action={
                        isConnect && (
                            <NavLink to='/integrations'>
                                <DeleteIcon sx={{ marginRight: 1, marginTop: 0.3 }} color='disabled' />
                            </NavLink>
                        )
                    }
                />
            </Card>
        </React.Fragment>
    );
}
