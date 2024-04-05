import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Grid, Stack, Typography } from '@mui/material';
import MainCard from '../components/common/MainCard';


export default function ApiPage() {
    const [apis, setApis] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/code/getApiList/660e34e06abdff8571b1b591`).then(res => {
            setApis(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [])

    function selectApi(data) {
        let path = `/dashboard/editor`;
        navigate(path);
    }

    return (
        <div>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                {apis.map((x, ind) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} onClick={() => selectApi(x)} style={{ cursor: 'pointer' }}>
                        <MainCard contentSX={{ p: 2.25 }}>
                            <Stack spacing={0.5}>
                                <Typography variant="h6" color="textPrimary">
                                    {x.name}
                                </Typography>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <Typography variant="caption" color="textSecondary">
                                            {x.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </MainCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
