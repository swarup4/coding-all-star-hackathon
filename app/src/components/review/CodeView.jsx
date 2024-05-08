import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HOST_URL } from '../../constants'

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { html } from '@codemirror/lang-html';
import { go } from '@codemirror/legacy-modes/mode/go';
import { sublime } from '@uiw/codemirror-theme-sublime';


export default function CodeView(props) {
    const [code, setCode] = useState('');
    const [extensions, setExtensions] = useState([]);

    useEffect(() => {
        const url = `${HOST_URL}submission/getApiDetails/${props.id}`
        axios.get(url).then(res => {
            setCode(res.data?.code)
            getExtensions(res.data?.programmingLanguage)
        }).catch(err => {
            console.log(err)
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
            {/* <div className='w-full absolute z-10' style={{height: "calc(100vh - 180px)", background: "rgba(0, 0, 0, 0)"}}></div> */}
            <CodeMirror value={code} height="calc(100vh - 180px)" options={codeOptions} theme={sublime} extensions={extensions} />
        </div>
    )
}
