import moment from 'moment'
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
    if (name) {
        let arr = name.split(' ')
        let initial = ''
        if (arr.length > 1) {
            initial = arr[0][0] + arr[1][0]
        } else {
            initial = arr[0][0]
        }
        return initial;
    }
}

export const randomColor = () => {
    let colors = [
        'text-violet-600 bg-violet-200',
        'text-green-600 bg-green-200',
        'text-red-600 bg-red-200',
        'text-yellow-600 bg-yellow-200',
        'text-orange-600 bg-orange-200',
        'text-teal-600 bg-teal-200',
        'text-cyan-600 bg-cyan-200',
        'text-blue-600 bg-blue-200',
        'text-rose-600 bg-rose-200',
    ]
    let color = colors[Math.floor(Math.random() * colors.length)];
    return color;
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

export const getParticipate = (applied, userId) => {
    for (let i of applied) {
        if (i._id === userId) {
            return true;
        }
    }
    return false;
}

export const checkDateDifference = (createdAt) => {
    const now = moment();
    const differenceInDays = now.diff(createdAt, 'days');
    return (2 - differenceInDays)
}

export const timeCalculator = (time) => {
    let minute = Math.floor(time / 60);
    let second = time - (minute * 60);

    return {
        minute,
        second
    }
}