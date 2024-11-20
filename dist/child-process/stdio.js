"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const sp = (0, child_process_1.spawn)(process.execPath, [
    '-e',
    `console.error('err output'); process.stdin.pipe(process.stdout)`
], { stdio: ['pipe', 'inherit', 'ignore'] });
sp.stdin.write('this input will become output\n');
sp.stdin.end();
(0, child_process_1.spawnSync)(process.execPath, [
    '-e',
    `console.error('err output'); process.stdin.pipe(process.stdout)`
], {
    input: 'this input will become output\n',
    stdio: ['pipe', 'inherit', 'ignore']
});
