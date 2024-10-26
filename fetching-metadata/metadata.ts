import fs from 'fs';
import fsP from 'fs/promises';
const fileName = process.argv[2];

console.log('file name', fileName);

function printMetaData(fileName: string) {
  try {
    fs.access(fileName, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('file path:', fileName, 'does not exist');
        throw new Error();
      } else {
        const fileStats = fs.statSync(fileName);
        console.log(fileStats);
      }
    });
  } catch (err) {
    console.error('Error reading file path:', fileName);
  }
}
printMetaData(fileName);

fsP.chmod(
  fileName,
  0o777
);
