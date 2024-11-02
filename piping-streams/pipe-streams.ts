import fs from 'fs';
import path from 'path';
const filepath = path.join(process.cwd(), 'piping-streams/file.txt');
const rs = fs.createReadStream(filepath);
rs.pipe(process.stdout)