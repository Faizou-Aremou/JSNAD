"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const output = (0, child_process_1.exec)(`${process.execPath} -e "console.log('A'); throw Error('B')"`, (err, stdout, stderr) => {
    console.log('err', err);
    console.log('subprocess stdout: ', stdout.toString());
    console.log('subprocess stderr: ', stderr.toString());
});
const sp = (0, child_process_1.exec)(`"${process.execPath}" -e "console.log('subprocess stdio output')"`);
console.log('pid is', sp.pid);
(_a = sp.stdout) === null || _a === void 0 ? void 0 : _a.pipe(process.stdout);
sp.on('close', (status) => {
    console.log('exit status was', status);
});
