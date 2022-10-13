import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { ImageProps } from '../../../interface';
import styles from './ImageCard.module.css';
import { Avatar, CardMedia } from '@mui/material';

const ImageCard = ({ title, author, imageUrl, date }: ImageProps) => {
    return (
        <React.Fragment>
            <Card variant='outlined' className={styles.card}>
                <CardMedia component='img' height='194' image={imageUrl} alt={title} />
                <CardHeader
                    avatar={<Avatar src='/author' alt={author} className={styles.avatar} />}
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
                {/* <CardHeader
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
                /> */}
            </Card>
        </React.Fragment>
    );
};

export default ImageCard;
