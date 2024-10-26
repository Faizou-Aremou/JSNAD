import fs from 'fs';
import moment from 'moment';

const file = '../file-watching/file.txt';

fs.watchFile(file, (current, previous) => {
  const time = moment().format('MMMM Do YYYY, h:mm:ss a');
  return console.log(`${file} update ${time}`);
});
