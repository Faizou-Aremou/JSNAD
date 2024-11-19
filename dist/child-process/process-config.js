"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = require("path");
const { IS_CHILD } = process.env;
if (IS_CHILD) {
    console.log('Subprocess cwd:', process.cwd());
    console.log('env', process.env);
}
else {
    const { root } = (0, path_1.parse)(process.cwd());
    const sp = (0, child_process_1.spawn)(process.execPath, [__filename], {
        cwd: root,
        env: { IS_CHILD: '1' }
    });
    sp.stdout.pipe(process.stdout);
}
