import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { TaskProps } from '../interface';
import { statuses } from '../const';

export default function Task({ title, closeDate, name, status }: TaskProps) {
    return (
        <React.Fragment>
            <Card variant='outlined' sx={{ marginBottom: 1, boxShadow: '3px 3px 2px #EBEBEB' }}>
                <CardContent sx={{ paddingBottom: 2, paddingY: 1 }}>
                    <Typography sx={{ fontWeight: 'bold', marginBottom: 1 }}>{title}</Typography>
                    <Typography color={'#bababa'} fontSize={14}>
                        Close date: {closeDate}
                    </Typography>
                </CardContent>
                <CardHeader
                    sx={{ paddingY: 2 }}
                    avatar={<Avatar sx={{ width: 30, height: 30, backgroundColor: '#2196f3' }} alt={name} src='/static/images/avatar/1.jpg' />}
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
