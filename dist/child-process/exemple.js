"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
// const cmd = process.platform === 'win32' ? 'dir' : 'ls';
// const output = execSync(cmd);
// console.log(output.toString());
// const output2 = execSync(
//   `${process.execPath} -e "console.error('subprocess stdio output')"`
// );
// console.log(output2.toString());
try {
    (0, child_process_1.execSync)(`${process.execPath} -e "throw Error('kaboom')"`);
}
catch (err) {
    console.error('CAUGHT ERROR:', err);
}
