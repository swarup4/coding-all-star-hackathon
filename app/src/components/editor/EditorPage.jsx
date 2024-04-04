import React, { useState } from 'react'
import axios from 'axios'
import { Grid, Box, InputLabel, MenuItem, FormControl, Select, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import './style.scss';

import Editor from './Editor'
import FileList from '../files/FileList';

export default function EditorPage() {
    const [language, setLanguage] = useState('');
    const [code, setCode] = useState('');

    // const changeLanguage = (event) => {
    //     setLanguage(event.target.value);
    // };

    function save() {
        let body = { code: code }
        console.log(body)
        // axios.put(`http://localhost:3001/code/saveCode/:id`, body).then(res => {
        //     console.log(res.data.data);
        // }).catch(err => {
        //     console.log(err);
        // });
        
    }

    function getFileDetails(data) {
        let arr = data.fileName.split('.');
        let fileExt = arr[arr.length - 1]
        setLanguage(fileExt)
        setCode(data.code)
    }

    function getCode(data) {
        setCode(data)
        console.log(data)
    }


    return (
        <Box sx={{ flexGrow: 1, height: '100%' }}>
            <Grid container spacing={2} style={{ height: '100%' }}>
                <Grid item xs={3} className='left-panel'>
                    <FileList selectFile={getFileDetails} />
                </Grid>
                <Grid item xs={9}>
                    <Box>
                        <IconButton aria-label="save" color="primary" onClick={() => save()}>
                            <SaveIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                        <Editor language={language} code={code} getCode={getCode} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
