import React, { useEffect, useState, useCallback } from 'react';
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

export default function EditorView(props) {

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
            {props.language == 'nodejs' && (
                <CodeMirror value={props.code} height="calc(100vh - 500px)" options={codeOptions} theme={sublime} extensions={[javascript({ jsx: true })]} />
            )}
            {props.language == 'java' && (
                <CodeMirror value={props.code} height="calc(100vh - 500px)" options={codeOptions} theme={sublime} extensions={[java()]} />
            )}
            {props.language == 'html' && (
                <CodeMirror value={props.code} height="calc(100vh - 500px)" options={codeOptions} theme={sublime} extensions={[html({ matchClosingTags: true })]} />
            )}
            {props.language == 'go' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" options={codeOptions} theme={sublime} extensions={[StreamLanguage.define(go)]} />
            )}
            {props.programmingLanguage == 'cpp' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" options={codeOptions} theme={sublime} extensions={[cpp()]} />
            )}
            {props.programmingLanguage == 'json' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" options={codeOptions} theme={sublime} extensions={[json()]} />
            )}
            {props.programmingLanguage == 'php' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" options={codeOptions} theme={sublime} extensions={[php({ baseLanguage: 'php' })]} />
            )}
            {props.programmingLanguage == 'python' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" options={codeOptions} theme={sublime} extensions={[python()]} />
            )}
            {props.programmingLanguage == 'rust' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" options={codeOptions} theme={sublime} extensions={[rust()]} />
            )}
            {props.programmingLanguage == 'csharp' && (
                <CodeMirror value={props.code} height="calc(100vh - 247px)" options={codeOptions} theme={sublime} extensions={[basicSetup, csharp()]} />
            )}
        </div>
    )
}
