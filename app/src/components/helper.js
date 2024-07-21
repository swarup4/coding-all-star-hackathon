import moment from 'moment'
import { StreamLanguage } from '@codemirror/language';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { php } from '@codemirror/lang-php';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { csharp } from '@replit/codemirror-lang-csharp';
import { basicSetup } from 'codemirror';
import { go } from '@codemirror/legacy-modes/mode/go';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { kotlin } from '@codemirror/legacy-modes/mode/clike';
import { scala } from '@codemirror/legacy-modes/mode/clike';
import { perl } from '@codemirror/legacy-modes/mode/perl';
import { haskell } from '@codemirror/legacy-modes/mode/haskell';
import { lua } from '@codemirror/legacy-modes/mode/lua';
import { r } from '@codemirror/legacy-modes/mode/r';
// import { elixir } from '@codemirror/legacy-modes/mode/elixir';
// import { matlab } from '@codemirror/legacy-modes/mode/matlab';
// import { dart } from '@codemirror/legacy-modes/mode/dart';
import { powerShell } from '@codemirror/legacy-modes/mode/powershell';
import { objectiveC } from '@codemirror/legacy-modes/mode/clike';
import { fSharp } from '@codemirror/legacy-modes/mode/mllike';
import { groovy } from '@codemirror/legacy-modes/mode/groovy';
import { julia } from '@codemirror/legacy-modes/mode/julia';

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
        case 'go':
            extension = [StreamLanguage.define(go)];
            break;
        case 'cpp':
            extension = [cpp()];
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
        case 'swift':
            extension = [StreamLanguage.define(swift)];
            break;
        case 'kotlin':
            extension = [StreamLanguage.define(kotlin)];
            break;
        case 'scala':
            extension = [StreamLanguage.define(scala)];
            break;
        case 'perl':
            extension = [StreamLanguage.define(perl)];
            break;
        case 'haskell':
            extension = [StreamLanguage.define(haskell)];
            break;
        case 'lua':
            extension = [StreamLanguage.define(lua)];
            break;
        case 'r':
            extension = [StreamLanguage.define(r)];
            break;
        // case 'elixir':
        //     extension = [StreamLanguage.define(elixir)];
        //     break;
        // case 'matlab':
        //     extension = [StreamLanguage.define(matlab)];
        //     break;
        // case 'dart':
        //     extension = [StreamLanguage.define(dart)];
        //     break;
        case 'powershell':
            extension = [StreamLanguage.define(powerShell)];
            break;
        case 'objectivec':
            extension = [StreamLanguage.define(objectiveC)];
            break;
        case 'fsharp':
            extension = [StreamLanguage.define(fSharp)];
            break;
        case 'groovy':
            extension = [StreamLanguage.define(groovy)];
            break;
        case 'julia':
            extension = [StreamLanguage.define(julia)];
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

export const programmingLanguageList = [{
    name: 'JavaScript',
    value: 'javascript'
}, {
    name: 'TypeScript',
    value: 'typescript'
}, {
    name: 'Java',
    value: 'java'
}, {
    name: 'Go Lang',
    value: 'go'
}, {
    name: 'C++',
    value: 'cpp'
}, {
    name: 'PHP',
    value: 'php'
}, {
    name: 'Python',
    value: 'python'
}, {
    name: 'RUST',
    value: 'rust'
}, {
    name: 'RUBY',
    value: 'ruby'
}, {
    name: 'C#',
    value: 'csharp'
}, {
    name: 'Swift',
    value: 'swift'
}, {
    name: 'Kotlin',
    value: 'kotlin'
}, {
    name: 'Scala',
    value: 'scala'
}, {
    name: 'Perl',
    value: 'perl'
}, {
    name: 'Haskell',
    value: 'haskell'
}, {
    name: 'Lua',
    value: 'lua'
}, {
    name: 'R',
    value: 'r'
// }, {
//     name: 'Elixir',
//     value: 'elixir'
// }, {
//     name: 'Matlab',
//     value: 'matlab'
// }, {
//     name: 'Dart',
//     value: 'dart'
}, {
    name: 'Power Shell',
    value: 'powershell'
}, {
    name: 'Ojective C',
    value: 'objectiveC'
}, {
    name: 'F#',
    value: 'fsharp'
}, {
    name: 'Groovy',
    value: 'groovy'
}, {
    name: 'Julia',
    value: 'julia'
}];