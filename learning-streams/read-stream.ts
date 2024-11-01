import fs from 'fs';
import path from 'path';
const filepath = path.join(process.cwd(), 'learning-streams/file.txt');
const file = fs.createReadStream(filepath);

file.on('data', (data) => {
  console.log(data.toString());console.log('chunk')
});

file.on('end', () => {
  console.log('no more data!');
});
