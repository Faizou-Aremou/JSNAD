import fs from 'fs';
import { Transform, TransformCallback } from 'stream';
import path from 'path';
const filepath = path.join(process.cwd(), 'transform-streams/file.txt');
const newFilepath = path.join(process.cwd(), 'transform-streams/newFile.txt');
const rs = fs.createReadStream(filepath);
const newFileS = fs.createWriteStream(newFilepath);
class UppercaseStream extends Transform {
  _transform(
    chunk: any,
    encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    callback(null, chunk.toString().toUpperCase());
  }
}

rs.pipe(new UppercaseStream()).pipe(newFileS);
