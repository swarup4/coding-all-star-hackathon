import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux'

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { html } from '@codemirror/lang-html';
import { go } from '@codemirror/legacy-modes/mode/go';
import { sublime } from '@uiw/codemirror-theme-sublime';

export default function Editor(props) {
    const submission = useSelector(store => store.submission.data)

    const onChange = useCallback((val, viewUpdate) => {
        props.setCode(val);
    }, []);

    useEffect(() => {
        if (props.type == 'code' || props.type == 'test') {
            if ((submission.programmingLanguage == 'nodejs' || submission.programmingLanguage == 'js') && props.code == '') {
                props.setCode("console.log('hello world!');")
            } else if (submission.programmingLanguage == 'java' && props.code == '') {
                props.setCode('System.out.println("hello world!");')
            }
            else if (props.programmingLanguage == 'html' && props.code == '') {
                props.setCode(`<html>
        <head>
            <title>index page</title>
        </head>
        <body>
            <h1>Hello</h1>
        </body>
    <html>`)
            }
            else if (submission.programmingLanguage == 'go' && props.code == '') {
                props.setCode(`package main
    import "fmt"
                    
    func main() {
        fmt.Println("Hello, 世界")
    }`)
            }
        } else {
            props.setCode('')
        }
    }, [submission.programmingLanguage])

    const codeOptions = {
        line: true,
        lineNumbers: true,
        tabSize: 4,
        styleActiveLine: true,
        lineWrapping: true,
        foldGutter: true
    };

    return (

        <div>
            {submission.programmingLanguage == 'nodejs' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" onChange={onChange} options={codeOptions} theme={sublime} extensions={[javascript({ jsx: true })]} />
            )}
            {submission.programmingLanguage == 'java' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" onChange={onChange} options={codeOptions} theme={sublime} extensions={[java()]} />
            )}
            {submission.programmingLanguage == 'html' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" onChange={onChange} options={codeOptions} theme={sublime} extensions={[html({ matchClosingTags: true })]} />
            )}
            {submission.programmingLanguage == 'go' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" onChange={onChange} options={codeOptions} theme={sublime} extensions={[StreamLanguage.define(go)]} />
            )}
        </div>
    );
}
