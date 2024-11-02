import { Transform } from 'stream';
import { stringify } from 'ndjson';

const name = new Transform({
  objectMode: true,
  transform: ({ forename, surname }, encoding, callback) => {
    callback(null, { name: forename + '' + surname });
  },
});

name.pipe(stringify()).pipe(process.stdout);

name.write({ forename: 'John', surname: 'Doe' });
name.write({ forename: 'Jane', surname: 'Doe' });
