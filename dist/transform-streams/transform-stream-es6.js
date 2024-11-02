"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const stream_1 = require("stream");
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(process.cwd(), 'transform-streams/file.txt');
const newFilepath = path_1.default.join(process.cwd(), 'transform-streams/newFile.txt');
const rs = fs_1.default.createReadStream(filepath);
const newFileS = fs_1.default.createWriteStream(newFilepath);
class UppercaseStream extends stream_1.Transform {
    _transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
}
rs.pipe(new UppercaseStream()).pipe(newFileS);
