import fs from 'fs';
import { Transform, pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';

const pipelinePromesse = promisify(pipeline);
const filepath = path.join(process.cwd(), 'piping-streams/file.txt');
const newFilepath = path.join(process.cwd(), 'piping-streams/newFile.txt');
const rs = fs.createReadStream(filepath);
const newFileS = fs.createWriteStream(newFilepath);
const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

async function run() {
  await pipelinePromesse(rs, uppercase, newFileS);
  console.log('Pipeline run with success');
}
run().catch(() => {
  console.log('Error in the pipeline');
});
