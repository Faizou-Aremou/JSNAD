'use strict';
process.stdin.on('data', (data) => {
    const name = data.toString().trim().toUpperCase();
    if (name === '') {
        process.stderr.write('Input was empty');
    }
    else {
        process.stdout.write(`Hello ${name}`);
    }
});
