import React, { useState } from 'react';
import { Grid, Box, Link, TextField, IconButton } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import './style.scss';

export default function FileList() {

    const [addFile, setAddFile] = useState(false);
    const [fileName, setFileName] = useState('');
    const [files, setFiles] = useState([]);

    function keyPress(e) {
        if (e.key === "Enter") {
            setFiles([...files, fileName]);
            setAddFile(false);
            setFileName('')
        }
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
                    <Link className='file-name' underline="none" key={ind}>
                        {x}
                    </Link>
                ))}
            </Box>
        </Box>
    )
}
