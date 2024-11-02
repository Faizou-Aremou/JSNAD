"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(process.cwd(), 'learning-streams/file.txt');
const rs = fs_1.default.createReadStream(filepath);
rs.on('readable', () => {
    // let data = rs.read();
    // while (data !== null) {
    //   console.log('read chunk data', data);
    //   data = rs.read();
    // }
});
rs.on('end', () => {
    console.log('No more data.');
});
