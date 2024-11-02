"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const ndjson_1 = require("ndjson");
const name = new stream_1.Transform({
    objectMode: true,
    transform: ({ forename, surname }, encoding, callback) => {
        callback(null, { name: forename + '' + surname });
    },
});
name.pipe((0, ndjson_1.stringify)()).pipe(process.stdout);
name.write({ forename: 'John', surname: 'Doe' });
name.write({ forename: 'Jane', surname: 'Doe' });
