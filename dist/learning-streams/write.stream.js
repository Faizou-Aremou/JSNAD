"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(process.cwd(), 'learning-streams/file.txt');
const file = fs_1.default.createWriteStream(filepath);
for (let i = 0; i <= 5e6; i++) {
    file.write('Node.js is a javascript runtime built on Google Chrome v8 javascript engine');
}
