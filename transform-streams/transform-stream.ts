import fs from 'fs';
import path from 'path';
import { Transform } from 'stream';
const filepath = path.join(process.cwd(), 'transform-streams/file.txt');
const newFilepath = path.join(process.cwd(), 'transform-streams/newFile.txt');
const rs = fs.createReadStream(filepath);
const newFileS = fs.createWriteStream(newFilepath);

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

rs.pipe(uppercase).pipe(newFileS);
