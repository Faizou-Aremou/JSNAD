"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const HOSTNAME = 'localhost';
const PORT = 3000;
const socket = net_1.default.connect(PORT, HOSTNAME);
socket.write('World');
socket.on('data', (data) => {
    console.log(data.toString());
});
