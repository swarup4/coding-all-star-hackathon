import React, { useState } from 'react'
import axios from 'axios'
import { Grid, Box, InputLabel, MenuItem, FormControl, Select, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import Editor from '../components/editor/Editor'
import FileList from '../components/files/FileList';

export default function EditorPage() {
    const [language, setLanguage] = useState('')
    const [codes, setCodes] = useState('')
    const [fileId, setFileId] = useState('')

    function save() {
        let body = { code: codes }
        axios.put(`http://localhost:3001/code/saveCode/${fileId}`, body).then(res => {
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }

    function getFileDetails(data) {
        let arr = data.fileName.split('.');
        let fileExt = arr[arr.length - 1]
        setLanguage(fileExt)
        setCodes(data.code)
        setFileId(data._id)
    }


    return (
        <Box sx={{ flexGrow: 1, height: '100%' }}>
            <Grid container spacing={2} style={{ height: '100%' }}>
                <Grid item xs={3} style={{border: '1px solid #e6e6e6'}}>
                    <FileList selectFile={getFileDetails} />
                </Grid>
                <Grid item xs={9}>
                    <Box>
                        <IconButton aria-label="save" color="primary" onClick={() => save()}>
                            <SaveIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                        <Editor language={language} code={codes} setCode={setCodes} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
