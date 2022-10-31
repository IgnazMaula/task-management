import * as React from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import styles from './NewProject.module.scss';

const NewProject = () => {
    return (
        <React.Fragment>
            <Card variant="outlined" className={styles.card}>
                <NavLink to="/projects">
                    <CardContent className={styles.cardContent}>
                        <AddCircleIcon color="primary" />
                        <Typography align="center" className={styles.createNewText} color="#9E9E9E">
                            CREATE NEW
                        </Typography>
                    </CardContent>
                </NavLink>
            </Card>
        </React.Fragment>
    );
};

export default NewProject;
