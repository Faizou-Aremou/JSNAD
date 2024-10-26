import fs from 'fs/promises';
import path from 'path';

const filepath = path.join(process.cwd(), 'working-with-files/hello.txt');
fs.readFile(filepath, 'utf8')
  .then((contents) => {
    console.log('File contents', contents);
  })
  .catch((err) => {
    if (err) {
      process.stderr.write(err.message);
    }
  });

async function run() {
  try {
  const contents =  await fs.readFile(filepath, 'utf8');
  console.log('File contents 2', contents);
  } catch (err) {
    console.error(err);
  }
}

run()