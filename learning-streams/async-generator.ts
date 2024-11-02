import { Readable } from 'stream';

async function* generate() {
  yield 'NodeL.js';
  yield 'is';
  yield 'a';
  yield 'javascript';
  yield 'Runtime';
}

const readable = Readable.from(generate());

async function run() {
  for await (const data of readable) {
    console.log(data);
  }
}

run()