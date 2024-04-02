import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Editor from './Editor'

export default function EditorPage() {
    const [language, setLanguage] = React.useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };


    return (
        <div>
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language}
                        label="Language"
                        onChange={handleChange}
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
        </div>
    )
}
