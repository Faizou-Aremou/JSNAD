"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const result = (0, child_process_1.spawnSync)(process.execPath, [
    '-e',
    `console.log('subprocess stdio output')`,
]);
console.log(result);
const sp = (0, child_process_1.spawn)(process.execPath, [`-e`, `process.exit(1)`]);
console.log('pid is', sp.pid);
sp.stdout.pipe(process.stdout);
sp.on('close', (status) => {
    console.log('exit status was', status);
});
