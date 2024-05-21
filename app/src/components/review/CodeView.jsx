import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../../axiosInstance'
import { useDispatch } from 'react-redux'
import { HOST_URL } from '../../constants'
import { setNotification } from '../../store/notification/notificationSlice'

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { html } from '@codemirror/lang-html';
import { cpp } from '@codemirror/lang-cpp';
import { json } from '@codemirror/lang-json';
import { php } from '@codemirror/lang-php';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { csharp } from '@replit/codemirror-lang-csharp';
import { basicSetup } from 'codemirror';
import { go } from '@codemirror/legacy-modes/mode/go';
import { sublime } from '@uiw/codemirror-theme-sublime';


export default function CodeView(props) {
    const dispatch = useDispatch()
    const [code, setCode] = useState('');
    const [extensions, setExtensions] = useState([]);

    useEffect(() => {
        const url = `${HOST_URL}submission/getApiDetails/${props.id}`
        axios.get(url).then(res => {
            setCode(res.data?.code)
            getExtensions(res.data?.programmingLanguage)
        }).catch(err => {
            console.log(err)
            dispatch(setNotification({
                popup: true,
                status: 'error',
                message: err.response.data
            }))
        })
    }, [])

    function getExtensions(language) {
        switch (language) {
            case 'nodejs':
                setExtensions([javascript({ jsx: true })]);
                break;
            case 'java':
                setExtensions([java()]);
                break;
            case 'html':
                setExtensions([html({ matchClosingTags: true })]);
                break;
            case 'go':
                setExtensions([StreamLanguage.define(go)]);
                break;
            case 'cpp':
                setExtensions([cpp()]);
                break;
            case 'json':
                setExtensions([json()]);
                break;
            case 'php':
                setExtensions([php({ baseLanguage: 'php' })]);
                break;
            case 'python':
                setExtensions([python()]);
                break;
            case 'rust':
                setExtensions([rust()]);
                break;
            case 'csharp':
                setExtensions([basicSetup, csharp()]);
                break;
            default:
                break;
        }
    }

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
