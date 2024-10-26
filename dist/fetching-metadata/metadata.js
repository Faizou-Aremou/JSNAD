"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const promises_1 = __importDefault(require("fs/promises"));
const fileName = process.argv[2];
console.log('file name', fileName);
function printMetaData(fileName) {
    try {
        fs_1.default.access(fileName, fs_1.default.constants.F_OK, (err) => {
            if (err) {
                console.error('file path:', fileName, 'does not exist');
                throw new Error();
            }
            else {
                const fileStats = fs_1.default.statSync(fileName);
                console.log(fileStats);
            }
        });
    }
    catch (err) {
        console.error('Error reading file path:', fileName);
    }
}
printMetaData(fileName);
promises_1.default.chmod(fileName, 0o777);
