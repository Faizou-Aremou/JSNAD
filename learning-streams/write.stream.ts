import fs from 'fs';
import path from 'path';
const filepath = path.join(process.cwd(), 'learning-streams/file.txt');
const file = fs.createWriteStream(filepath);

for (let i = 0; i <= 5e6; i++) {
  file.write(
    'Node.js is a javascript runtime built on Google Chrome v8 javascript engine'
  );
}
