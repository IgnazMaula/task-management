import * as React from 'react';

import { Avatar, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { ImageProps } from '../../../interface';
import styles from './ImageCard.module.css';

const ImageCard = ({ title, author, imageUrl, date }: ImageProps) => {
    return (
        <React.Fragment>
            <Card variant="outlined" className={styles.card}>
                <CardMedia component="img" height="194" image={imageUrl} alt={title} />
                <CardHeader
                    avatar={<Avatar src="/author" alt={author} className={styles.avatar} />}
                    subheader={
                        <Typography fontSize={18} className={styles.cardTitle}>
                            {title}
                        </Typography>
                    }
                    title={<Typography fontSize={12}>BY {author.toUpperCase()}</Typography>}
                />
                <CardContent className={styles.cardContent}>
                    <Typography fontSize={11}>{date}</Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default ImageCard;
