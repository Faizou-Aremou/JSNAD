import fs from 'fs';
import path from 'path';

const filepath = path.join(process.cwd(), 'working-with-files/hello.txt');
const contents = fs.readFileSync(filepath, 'utf8');
console.log('File contents', contents);
const upperContents = contents.toUpperCase();
fs.writeFileSync(filepath, upperContents)
console.log('file updated. ')
