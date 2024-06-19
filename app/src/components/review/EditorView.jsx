import React, { useEffect, useState, useCallback } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { sublime } from '@uiw/codemirror-theme-sublime';
import { getExtensions } from '../helper';

export default function EditorView(props) {

    const [extensions, setExtensions] = useState([]);

    const codeOptions = {
        line: true,
        lineNumbers: true,
        tabSize: 4,
        styleActiveLine: true,
        lineWrapping: true,
        foldGutter: true
    };

    useEffect(() => {
        setExtensions(getExtensions(props.language))
    }, [])

    return (
        <div>
            <CodeMirror value={props.code} height="calc(100vh - 500px)" options={codeOptions} theme={sublime} extensions={extensions} />
        </div>
    )
}
