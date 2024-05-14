import React, { useEffect, useState, useCallback } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { html } from '@codemirror/lang-html';
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
        </div>
    )
}
