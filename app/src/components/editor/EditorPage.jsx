import React from 'react'
import { Grid, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';


import './style.scss';

import Editor from './Editor'
import FileList from '../files/FileList';

export default function EditorPage() {
    const [language, setLanguage] = React.useState('');

    const changeLanguage = (event) => {
        setLanguage(event.target.value);
    };


    return (
        // <div>

        // </div>

        <Box sx={{ flexGrow: 1, height: '100%' }}>
            <Grid container spacing={2} style={{ height: '100%' }}>
                <Grid item xs={3} className='left-panel'>
                    <FileList />
                </Grid>
                <Grid item xs={9}>
                    <Box>
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="Language"
                                onChange={changeLanguage}
                            >
                                <MenuItem value={'javascript'}>JavaScript</MenuItem>
                                <MenuItem value={'java'}>Java</MenuItem>
                                <MenuItem value={'go'}>Go</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                        <Editor language={language} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
