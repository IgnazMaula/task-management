import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './NewProject.module.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { NavLink } from 'react-router-dom';

export default function NewProject() {
    return (
        <React.Fragment>
            <Card variant='outlined' className={styles.card}>
                <NavLink to='/projects'>
                    <CardContent className={styles.cardContent}>
                        <AddCircleIcon color='primary' />
                        <Typography align='center' className={styles.createNewText} color='#9E9E9E'>
                            CREATE NEW
                        </Typography>
                    </CardContent>
                </NavLink>
            </Card>
        </React.Fragment>
    );
}
