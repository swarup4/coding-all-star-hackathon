import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../../axiosInstance'
import { useDispatch } from 'react-redux'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'
import { getExtensions } from '../helper'
import CodeMirror from "@uiw/react-codemirror";
import { sublime } from '@uiw/codemirror-theme-sublime';


export default function CodeView(props) {
    const dispatch = useDispatch()
    const [code, setCode] = useState('');
    const [extensions, setExtensions] = useState([]);

    useEffect(() => {
        const url = `${HOST_URL}submission/getApiDetails/${props.id}`
        axios.get(url).then(res => {
            setCode(res.data?.code)
            setExtensions(getExtensions(res.data?.programmingLanguage))
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [])

    const codeOptions = {
        line: true,
        lineNumbers: true,
        tabSize: 4,
        styleActiveLine: true,
        lineWrapping: true,
        foldGutter: true,
        readOnly: true
    };

    return (
        <div className='relative'>
            <CodeMirror value={code} height="calc(100vh - 180px)" options={codeOptions} theme={sublime} extensions={extensions} />
        </div>
    )
}
