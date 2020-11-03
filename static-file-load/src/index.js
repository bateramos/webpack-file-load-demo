import {readFileSync} from 'fs';
import path from 'path';

const root = process.env.INIT_CWD;

const textPath = path.join(root, 'files/text/demo.txt');

function main() {
    const text = readFileSync(textPath, {encoding: 'UTF-8'});

    console.log('Executing main');
    console.log('text:', text);
}

main();
