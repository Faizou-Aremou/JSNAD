"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const output = (0, child_process_1.execSync)(`node -e "console.error('subprocess stdio output')" `);
//console.log(output.toString());
