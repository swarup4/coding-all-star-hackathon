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
import { ruby } from '@codemirror/legacy-modes/mode/ruby';

export const getInitial = (name) => {
    if(name){
        let arr = name.split(' ')
        let initial = arr[0][0] + arr[1][0]
        return initial;
    }
}

export const getExtensions = (language) => {
    let extension;
    switch (language) {
        case 'javascript':
            extension = [javascript({ jsx: true })];
            break;
        case 'typescript':
            extension = [javascript({ typescript: true })];
            break;
        case 'java':
            extension = [java()];
            break;
        case 'html':
            extension = [html({ matchClosingTags: true })];
            break;
        case 'go':
            extension = [StreamLanguage.define(go)];
            break;
        case 'cpp':
            extension = [cpp()];
            break;
        case 'json':
            extension = [json()];
            break;
        case 'php':
            extension = [php({ baseLanguage: 'php' })];
            break;
        case 'python':
            extension = [python()];
            break;
        case 'rust':
            extension = [rust()];
            break;
        case 'ruby':
            extension = [StreamLanguage.define(ruby)];
            break;
        case 'csharp':
            extension = [basicSetup, csharp()];
            break;
        default:
            break;
    }

    return extension;
}
