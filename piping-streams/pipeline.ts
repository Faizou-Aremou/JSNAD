import fs from 'fs';
import path from 'path';
import { pipeline, Transform } from 'stream';
const filepath = path.join(process.cwd(), 'piping-streams/file.txt');
const newFilepath = path.join(process.cwd(), 'piping-streams/newFile.txt');
const rs = fs.createReadStream(filepath);
const newFileS = fs.createWriteStream(newFilepath);
const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});
pipeline(rs, uppercase, newFileS, (err) => {
  if (err) {
    console.log('Pipeline failed', err);
  } else {
    console.log('pipeline succeded');
  }
});
