import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux'

import CodeMirror from "@uiw/react-codemirror";
import { sublime } from '@uiw/codemirror-theme-sublime';
import { getExtensions } from '../helper';

export default function Editor(props) {
    const [extensions, setExtensions] = useState([]);
    const submission = useSelector(store => store.submission.data)

    const onChange = useCallback((val, viewUpdate) => {
        props.setCode(val);
    }, []);

    useEffect(() => {
        setExtensions(getExtensions(props.language))
    }, [])

    useEffect(() => {
        if (props.type == 'code' || props.type == 'test') {
            if (props.code == '' && (submission.programmingLanguage == 'javascript')) {
                props.setCode("console.log('hello world!');")
            } else if (props.code == '' && submission.programmingLanguage == 'python') {
                props.setCode('print("hello world!")')
            } else if (props.code == '' && submission.programmingLanguage == 'java') {
                props.setCode('System.out.println("hello world!");')
            } else if (props.code == '' && props.programmingLanguage == 'html') {
                props.setCode(`<html>
        <head>
            <title>index page</title>
        </head>
        <body>
            <h1>Hello</h1>
        </body>
    <html>`)
            }
            else if (props.code == '' && submission.programmingLanguage == 'go') {
                props.setCode(`package main
    import "fmt"
                    
    func main() {
        fmt.Println("Hello, 世界")
    }`)
            }
            else if (props.code == '' && submission.programmingLanguage == 'csharp') {
                props.setCode(`using System;
                namespace Test
                {
                  class Program
                  {
                    public static void Main(string[] args)
                    {
                      Console.WriteLine("Hello, world!");
                    }
                  }
                }`)
            }
        } else {
            props.setCode(props.code)
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
            <CodeMirror value={props.code} height="calc(100vh - 247px)" onChange={onChange} options={codeOptions} theme={sublime} extensions={extensions} />
        </div>
    );
}
