import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Grid, Box, Link, TextField, IconButton } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import './style.scss';

export default function FileList(props) {

    const [addFile, setAddFile] = useState(false);
    const [fileName, setFileName] = useState('');
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/code/getApiFileList/660e37d2b87ab697bdc66f30').then(res => {
            setFiles(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [])

    function keyPress(e) {
        if (e.key === "Enter") {
            addFileInfo(fileName)
        }
    }

    function addFileInfo(name) {
        let body = {
            apiId: "660e37d2b87ab697bdc66f30",
            fileName: name,
            code: ''
        }

        axios.post('http://localhost:3001/code/addApiFile', body).then(res => {
            setAddFile(false)
            setFileName('')
            setFiles([...files, res.data])
        }).catch(err => {
            console.log(err);
        });
    }

    function handleChange(ev) {
        setFileName(ev.target.value);
    }

    return (
        <Box>
            <Box>
                <IconButton aria-label="delete" color="primary" onClick={() => setAddFile(true)}>
                    <NoteAddIcon />
                </IconButton>
            </Box>
            <Box>
                {addFile ? <TextField fullWidth id="outlined-basic" onChange={(ev) => handleChange(ev)} value={fileName} label="File Name" variant="outlined" color='primary' onKeyDown={keyPress} /> : ''}
            </Box>
            <Box>
                {files.map((x, ind) => (
                    <Link className='file-name' underline="none" key={ind} onClick={() => props.selectFile(x)}>
                        {x.fileName}
                    </Link>
                ))}
            </Box>
        </Box>
    )
}
