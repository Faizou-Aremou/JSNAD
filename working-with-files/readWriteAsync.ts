import fs from 'fs';
import path from 'path';

const filepath = path.join(process.cwd(), 'working-with-files/hello.txt');
fs.readFile(filepath, 'utf8', (err, contents) => {
  if (err) {
    process.stderr.write(err.message);
  }
  console.log('File contents', contents);
  const upperContents = contents.toUpperCase();
  setTimeout(()=> updateFile(filepath, upperContents), 10);
});
function updateFile(filepath: string, contents: string) {
  fs.writeFile(filepath, contents, (err) => {
    if (err) throw err;
    console.log('file updated. ');
  });
}
setInterval(() => process.stdout.write('****\n'),1).unref();
