"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const HOSTNAME = 'localhost';
const PORT = 3000;
net_1.default
    .createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (name) => {
        socket.write(`Hello ${name}`);
    });
})
    .listen(PORT, HOSTNAME);
