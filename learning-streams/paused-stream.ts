import fs from 'fs';
import path from 'path';
const filepath = path.join(process.cwd(), 'learning-streams/file.txt');
const rs = fs.createReadStream(filepath);

rs.on('readable', () => {
  let data = rs.read();
  while (data !== null) {
    console.log('read chunk data', data);
    data = rs.read();
  }
});

rs.on('end', () => {
  console.log('No more data.');
});
