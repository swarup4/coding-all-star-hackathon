import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Grid, Box, Link, TextField, IconButton } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import '../files/style.scss';


export default function Api() {
    const [apis, setApis] = useState([]);
    let navigate = useNavigate(); 

    useEffect(() => {
        axios.get(`http://localhost:3001/code/getApiList/660e34e06abdff8571b1b591`).then(res => {
            setApis(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [])

    function selectApi(data){
        let path = `/dashboard/editor`; 
        navigate(path);
    }

    return (
        <div>
            {apis.map((x, ind) => (
                <Link className='file-name' underline="none" key={ind} onClick={() => selectApi(x)}>
                    {x.name}
                </Link>
            ))}
        </div>
    )
}
