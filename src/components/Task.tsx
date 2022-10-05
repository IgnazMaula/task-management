import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

interface Props {
    title: string;
    closeDate: string;
    name: string;
    status: string;
}
export default function Task({ title, closeDate, name, status }: Props) {
    const statusColor = (status: string) => {
        if (status === 'Default') {
            return 'default';
        } else if (status === 'Urgent') {
            return 'error';
        } else if (status === 'Canceled') {
            return 'error';
        } else if (status === 'Completed') {
            return 'primary';
        } else if (status === 'Paid') {
            return 'success';
        } else {
            return 'default';
        }
    };
    const statusBackgroundColor = (status: string) => {
        if (status === 'Default') {
            return '#EBEBEB';
        } else if (status === 'Urgent') {
            return '#FCE7E7';
        } else if (status === 'Canceled') {
            return '#FCE7E7';
        } else if (status === 'Completed') {
            return '#E3F2FD';
        } else if (status === 'Paid') {
            return '#ECF9F3';
        } else {
            return '#EBEBEB';
        }
    };
    return (
        <React.Fragment>
            <Card variant='outlined' sx={{ marginBottom: 1, boxShadow: '3px 3px 2px #EBEBEB' }}>
                <CardContent sx={{ paddingBottom: 2, paddingY: 1 }}>
                    <Typography sx={{ fontWeight: 'bold', marginBottom: 1 }}>{title}</Typography>
                    <Typography color={'#bababa'} fontSize={14}>
                        Close date: {closeDate}
                    </Typography>
                    {/* <Chip label='Chip Filled' /> */}
                </CardContent>
                <CardHeader
                    sx={{ paddingY: 2 }}
                    avatar={<Avatar sx={{ width: 30, height: 30, backgroundColor: '#2196f3' }} alt={name} src='/static/images/avatar/1.jpg' />}
                    title={name}
                    action={
                        <Chip
                            label={status}
                            color={statusColor(status)}
                            variant='outlined'
                            sx={{ backgroundColor: statusBackgroundColor(status), border: 'none' }}
                        />
                    }
                />
            </Card>
        </React.Fragment>
    );
}
