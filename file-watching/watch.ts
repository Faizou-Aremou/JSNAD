import fs from 'fs';
import moment from 'moment';

const file = '../file-watching/file.txt';

fs.watch(file, (eventType, trigger) => {
  console.log(eventType, trigger)
  const time = moment().format('MMMM Do YYYY, h:mm:ss a');
  return console.log(`${file} update ${time}`);
});
