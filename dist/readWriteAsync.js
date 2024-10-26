"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(process.cwd(), 'working-with-files/hello.txt');
fs_1.default.readFile(filepath, 'utf8', (err, contents) => {
    if (err) {
        process.stderr.write(err.message);
    }
    console.log('File contents', contents);
    const upperContents = contents.toUpperCase();
    setTimeout(() => updateFile(filepath, upperContents), 10);
});
function updateFile(filepath, contents) {
    fs_1.default.writeFile(filepath, contents, (err) => {
        if (err)
            throw err;
        console.log('file updated. ');
    });
}
setInterval(() => process.stdout.write('****\n'), 1).unref();
