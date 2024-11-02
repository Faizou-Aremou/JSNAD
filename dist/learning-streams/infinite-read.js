"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const rs = fs_1.default.createReadStream('/dev/urandom');
let size = 0;
rs.on('data', (data) => {
    size += data.length;
    console.log(size);
});
