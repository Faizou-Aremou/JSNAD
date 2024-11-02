import fs from 'fs';
import path from 'path';
const filepath = path.join(process.cwd(), 'learning-streams/file.txt');
const rs = fs.createReadStream(filepath);

async function run() {
  for await (const chunk of rs) {
    console.log('Read chunk;', chunk);
  }
  console.log('no more data');
}

run();
