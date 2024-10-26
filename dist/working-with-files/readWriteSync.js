"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(process.cwd(), 'working-with-files/hello.txt');
const contents = fs_1.default.readFileSync(filepath, 'utf8');
console.log('File contents', contents);
const upperContents = contents.toUpperCase();
fs_1.default.writeFileSync(filepath, upperContents);
console.log('file updated. ');
