import React, { useEffect, useState, useCallback } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { html } from '@codemirror/lang-html';
import { go } from '@codemirror/legacy-modes/mode/go';
import { sublime } from '@uiw/codemirror-theme-sublime';


export default function Editor(props) {
    const onChange = useCallback((val, viewUpdate) => {
        props.setCode(val);
    }, []);

    useEffect(() => {
        if(props.language == 'js' && props.code == ''){
            props.setCode("console.log('hello world!');")
        }else if(props.language == 'java' && props.code == ''){
            props.setCode('System.out.println("hello world!");')
        }
        else if(props.language == 'html' && props.code == ''){
            props.setCode(`<html>
    <head>
        <title>index page</title>
    </head>
    <body>
        <h1>Hello</h1>
    </body>
<html>`)
        }
        else if(props.language == 'go' && props.code == ''){
            props.setCode(`package main
import "fmt"
                
func main() {
    fmt.Println("Hello, 世界")
}`)
        }
    }, [props.language])

    const codeOptions = {
        // mode: "text/x-sql",
        line: true,
        lineNumbers: true,
        tabSize: 4,
        styleActiveLine: true,
        lineWrapping: true,
        foldGutter: true
    };

    return (

        <div>
            {props.language === 'js' && (
                <div>
                    <CodeMirror value={props.code} height="200px" onChange={onChange} options={codeOptions} theme={sublime} extensions={[javascript({ jsx: true })]} />
                </div>
            )}
            {props.language === 'java' && (
                <div>
                    <CodeMirror value={props.code} height="200px" onChange={onChange} options={codeOptions} theme={sublime} extensions={[java()]} />
                </div>
            )}
            {props.language === 'html' && (
                <div>
                    <CodeMirror value={props.code} height="200px" onChange={onChange} options={codeOptions} theme={sublime} extensions={[html({ matchClosingTags: true })]} />
                </div>
            )}
            {props.language === 'go' && (
                <div>
                    <CodeMirror value={props.code} height="200px" onChange={onChange} options={codeOptions} theme={sublime} extensions={[StreamLanguage.define(go)]} />;
                </div>
            )}
        </div>
    );
}
