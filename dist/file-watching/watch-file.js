"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const moment_1 = __importDefault(require("moment"));
const file = '../file-watching/file.txt';
fs_1.default.watchFile(file, (current, previous) => {
    const time = (0, moment_1.default)().format('MMMM Do YYYY, h:mm:ss a');
    return console.log(`${file} update ${time}`);
});
